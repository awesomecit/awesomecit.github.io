// Test della landing per techcitizen-infra#67: la stessa pagina deve funzionare
// su https://awesomecit.github.io/ e su https://techcitizen.it/team/antonio-cittadino/,
// sotto una CSP stretta (default-src 'self', niente inline).
// Lancio: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CANONICAL = 'https://techcitizen.it/team/antonio-cittadino/';
const PAGES = ['index.html', 'cv.html'];

const read = f => readFileSync(join(ROOT, f), 'utf8');

// Tutti i valori di un attributo nei tag HTML, con il tag che li contiene.
function attrs(html, name) {
  const re = new RegExp(`<([a-zA-Z0-9]+)\\b[^>]*?\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'g');
  return [...html.matchAll(re)].map(m => ({ tag: m[1].toLowerCase(), value: m[3] ?? m[4] }));
}

// I file CSS della pagina: <link rel="stylesheet" href="…"> locali.
function stylesheets(html) {
  return [...html.matchAll(/<link\b[^>]*>/g)]
    .map(m => m[0])
    .filter(t => /rel\s*=\s*"stylesheet"/.test(t))
    .map(t => t.match(/href\s*=\s*"([^"]*)"/)?.[1]);
}

for (const page of PAGES) {
  const html = read(page);

  test(`${page}: nessun percorso assoluto (href="/…", src="/…")`, () => {
    const bad = [...attrs(html, 'href'), ...attrs(html, 'src'), ...attrs(html, 'action')]
      .filter(a => a.value.startsWith('/'));
    assert.deepEqual(bad, []);
  });

  test(`${page}: nessuno script inline né gestori on…=`, () => {
    const inline = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
      .filter(m => !/\bsrc\s*=/.test(m[1]) || m[2].trim() !== '')
      .filter(m => !/type\s*=\s*"application\/ld\+json"/.test(m[1]));
    assert.equal(inline.length, 0, 'script inline trovati');
    assert.deepEqual(html.match(/<[^>]+\son[a-z]+\s*=/g) ?? [], []);
  });

  test(`${page}: niente <style> né attributi style (CSP senza 'unsafe-inline')`, () => {
    assert.equal(/<style\b/.test(html), false, 'blocco <style> trovato');
    assert.deepEqual(attrs(html, 'style'), []);
  });

  test(`${page}: risorse caricate solo dal sito stesso`, () => {
    // Si caricano: <script src>, <link href> (tranne canonical/alternate),
    // <img src>, <source src/srcset>, <iframe src>.
    const loaded = [
      ...attrs(html, 'src'),
      ...[...html.matchAll(/<link\b[^>]*>/g)]
        .map(m => m[0])
        .filter(t => !/rel\s*=\s*"(canonical|alternate)"/.test(t))
        .map(t => ({ tag: 'link', value: t.match(/href\s*=\s*"([^"]*)"/)?.[1] ?? '' })),
    ];
    const external = loaded.filter(a => /^(https?:)?\/\//.test(a.value));
    assert.deepEqual(external, []);
  });

  test(`${page}: i file locali citati esistono (link interni)`, () => {
    const local = [...attrs(html, 'href'), ...attrs(html, 'src')]
      .map(a => a.value)
      .filter(v => v && !/^([a-z]+:|#|\/\/)/i.test(v))
      .map(v => v.split(/[?#]/)[0]);
    const missing = local.filter(v => !existsSync(join(ROOT, v)));
    assert.deepEqual(missing, []);
  });

  test(`${page}: i CSS citano solo file locali che esistono`, () => {
    for (const css of stylesheets(html)) {
      const text = read(css);
      assert.equal(/@import/.test(text), false, `${css}: @import`);
      for (const [, raw] of text.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
        if (raw.startsWith('data:')) continue;
        assert.ok(!/^(https?:)?\/\//.test(raw) && !raw.startsWith('/'), `${css}: url esterno o assoluto ${raw}`);
        assert.ok(existsSync(join(ROOT, dirname(css), raw)), `${css}: manca ${raw}`);
      }
    }
  });
}

test('index.html: canonical e og:url su techcitizen.it', () => {
  const html = read('index.html');
  assert.match(html, new RegExp(`<link rel="canonical" href="${CANONICAL}">`));
  assert.match(html, new RegExp(`<meta property="og:url" content="${CANONICAL}">`));
  assert.match(html, new RegExp(`<meta property="og:image" content="${CANONICAL}assets/avatar\\.jpg">`));
});

test('cv.html: canonical su techcitizen.it', () => {
  assert.match(read('cv.html'), new RegExp(`<link rel="canonical" href="${CANONICAL}cv\\.html">`));
});

test('index.html: la card TechCitizen del team porta a techcitizen.it', () => {
  assert.match(read('index.html'), /<a class="card" href="https:\/\/techcitizen\.it\/?">/);
});

test('i JS non scrivono attributi style né gestori inline', () => {
  const dir = join(ROOT, 'assets');
  for (const f of readdirSync(dir).filter(f => extname(f) === '.js')) {
    const js = readFileSync(join(dir, f), 'utf8');
    assert.equal(/style\s*=\s*\\?["']/.test(js), false, `${f}: style="…" in una stringa HTML`);
    assert.equal(/\son[a-z]+\s*=\s*\\?["']/.test(js), false, `${f}: on…= in una stringa HTML`);
    assert.equal(/\beval\s*\(|new Function\s*\(/.test(js), false, `${f}: eval`);
  }
});

test('manifest.json: percorsi relativi', () => {
  const m = JSON.parse(read('manifest.json'));
  assert.equal(m.start_url.startsWith('/'), false);
  for (const i of m.icons ?? []) assert.equal(i.src.startsWith('/'), false);
});

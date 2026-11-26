// Un solo contenuto per due viste: la shell legge dalla pagina stessa,
// così CV, lavoro e team restano scritti una volta sola.
const $ = s => document.querySelector(s);
const out = $('#out'), cmd = $('#cmd');
const text = sel => [...document.querySelectorAll(sel)];

const commands = {
  help: () => `<span class="h">comandi</span>
  whoami     chi sono
  metodo     come lavoro
  lavoro     esperienze, dalla più recente
  team       i siti costruiti col team
  lab        i prodotti in beta su TechCitizen
  whatsapp   scrivimi in chat
  stack      gli attrezzi
  contatti   come trovarmi
  cv         scarica il cv in pdf (o apri cv.html)
  page       torna alla pagina
  clear      pulisce lo schermo
<span class="m">e poi ci sono comandi che non trovi qui. coffee, per esempio.</span>`,
  whoami: () => `<span class="h">Antonio Cittadino</span>
backend software developer · ingegnere elettronico
${$('.hero p.lead').textContent.trim()}
<span class="m">base: Reggio Emilia · Calabria · aperto a proposte</span> <span class="g">●</span>`,
  metodo: () => text('.method > div').map(d =>
    `<span class="g">▸</span> <span class="h">${d.querySelector('h3').textContent}</span>\n  <span class="m">${d.querySelector('p:last-child').textContent}</span>`).join('\n'),
  lavoro: () => text('.log > li').map(li => {
    const when = li.querySelector('.when b').textContent;
    const h = li.querySelector('h3').firstChild.textContent.trim();
    const at = li.querySelector('h3 small').textContent;
    const items = [...li.querySelectorAll('.pts li')].map(p => `  - ${p.textContent}`).join('\n');
    return `<span class="p">${when.padEnd(14)}</span><span class="h">${h}</span>\n${' '.repeat(14)}<span class="m">${at}</span>${items ? '\n' + items : ''}`;
  }).join('\n\n'),
  team: () => text('.team .card').map(c =>
    `<span class="g">▸</span> <span class="h">${c.querySelector('h3').textContent}</span>  <a href="${c.href}">${c.querySelector('.url').textContent.replace(' ↗','')}</a>\n  <span class="m">${c.querySelector('p').textContent}</span>`).join('\n'),
  stack: () => text('.stack > div').map(d =>
    `<span class="p">${d.querySelector('h3').textContent.padEnd(22)}</span>${d.querySelector('p').textContent}`).join('\n'),
  contatti: () => `email     <a href="mailto:awesome.cit.dev@gmail.com">awesome.cit.dev@gmail.com</a>
linkedin  <a href="https://linkedin.com/in/antonio-cittadino-9362b179">in/antonio-cittadino-9362b179</a>
github    <a href="https://github.com/awesomecit">github.com/awesomecit</a>`,
  cv: () => { const a = document.createElement('a'); a.href = 'cv.pdf'; a.download = 'CV_Antonio_Cittadino.pdf'; a.click(); return '<span class="m">scarico cv.pdf… la versione da leggere è su</span> <a href="cv.html">cv.html</a>'; },
  page: () => { setMode('page'); return ''; },
  clear: () => { out.innerHTML = ''; return null; },
  lab: () => text('.prod').map(a => `<span class="g">▸</span> <span class="h">${a.querySelector('b').textContent.padEnd(15)}</span><span class="p">[${a.querySelector('.pill').textContent.replace('● ','')}]</span> <a href="${a.href}">apri</a>\n  <span class="m">${a.querySelector('span:not(.pill)').textContent}</span>`).join('\n'),
  whatsapp: () => { window.open('https://wa.me/393804611277?text=Ciao%20Antonio%2C%20ho%20visto%20il%20tuo%20sito'); return '<span class="m">apro WhatsApp…</span>'; },
  coffee: () => `<span class="p">    ( (
     ) )
  ........
  |      |]
  \\      /
   '----'</span>  <span class="m">caffè erogato. build sbloccata.</span>`,
  ping: () => '<span class="g">PONG</span> <span class="m">· 1 ms da Calabria, 2 da Reggio Emilia, 0 se mi scrivi su WhatsApp</span>',
  fortune: () => { const f = ['Funziona sulla mia macchina. Quindi spediamo la mia macchina.','Il test più veloce è quello che hai scritto prima del codice.','Ci sono due problemi difficili: cache, nomi e off-by-one.','In sala operatoria non esiste "riprova più tardi".','Un ADR oggi ti risparmia una riunione domani.']; return '<span class="m">' + f[Math.floor(Math.random()*f.length)] + '</span>'; },
  sudo: () => '<span class="m">antonio non è nel file sudoers. Questo incidente verrà segnalato… via email, con gentilezza.</span>',
  'sudo make me a sandwich': () => '<span class="g">ok.</span> <span class="m">(xkcd 149, ovviamente)</span>',
  'rm -rf /': () => '<span class="m">bel tentativo. C\'è un backup, e pure un test che lo verifica.</span>',
  exit: () => { setMode('page'); return ''; },
};

const hist = []; let hi = 0;
function run(raw) {
  const c = raw.trim().toLowerCase().replace(/^cit\s+--?/, '');
  if (raw.trim()) { hist.push(raw.trim()); hi = hist.length; }
  const echo = `<div><span class="p">antonio@awesomecit:~$</span> ${raw.replace(/</g,'&lt;')}</div>`;
  if (!c) { out.insertAdjacentHTML('beforeend', echo); return; }
  const fn = commands[c];
  const res = fn ? fn() : `<span class="m">comando non trovato: ${c.replace(/</g,'&lt;')}. Prova</span> help`;
  if (res === null) return;
  out.insertAdjacentHTML('beforeend', echo + (res ? `<pre>${res}</pre><br>` : ''));
  $('#shell').scrollTop = 1e9;
}

$('#form').addEventListener('submit', e => { e.preventDefault(); run(cmd.value); cmd.value = ''; });
cmd.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp' && hi > 0) { cmd.value = hist[--hi]; e.preventDefault(); }
  if (e.key === 'ArrowDown') { hi = Math.min(hist.length, hi + 1); cmd.value = hist[hi] || ''; }
});
$('#chips').innerHTML = ['whoami','lavoro','team','lab','whatsapp','coffee','page'].map(c => `<button type="button">${c}</button>`).join('');
$('#chips').addEventListener('click', e => { if (e.target.tagName === 'BUTTON') { run(e.target.textContent); cmd.focus(); } });

let booted = false;
function setMode(m) {
  const shell = m === 'shell';
  document.body.classList.toggle('shell', shell);
  $('#m-page').setAttribute('aria-pressed', !shell);
  $('#m-shell').setAttribute('aria-pressed', shell);
  history.replaceState(null, '', shell ? '#shell' : location.pathname);
  if (shell) {
    if (!booted) { booted = true; run('whoami'); out.insertAdjacentHTML('beforeend', '<span class="m">scrivi help per i comandi.</span><br><br>'); }
    cmd.focus();
  }
}
$('#m-page').onclick = () => setMode('page');
$('#m-shell').onclick = () => setMode('shell');
document.addEventListener('keydown', e => {
  if (e.key === '`') { e.preventDefault(); setMode(document.body.classList.contains('shell') ? 'page' : 'shell'); }
  if (e.key === 'Escape' && document.body.classList.contains('shell')) setMode('page');
});
if (location.hash === '#shell') setMode('shell');

// uptime dal primo lavoro da sviluppatore (settembre 2018)
const days = Math.floor((Date.now() - new Date('2018-09-01')) / 864e5);
$('#uptime').textContent = `${days.toLocaleString('it-IT')} giorni`;

// ↑↑↓↓←→←→BA
const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']; let k = 0;
document.addEventListener('keydown', e => {
  k = e.key === seq[k] ? k + 1 : (e.key === seq[0] ? 1 : 0);
  if (k === seq.length) { k = 0; const t = document.createElement('div'); t.className = 'toast'; t.textContent = '+30 vite · god mode attivo · i test passano tutti (per oggi)'; document.body.append(t); setTimeout(() => t.remove(), 3500); }
});

import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class NavBar extends LitElement {
    static properties = {
        currentLang: { type: String },
        theme: { type: String }
    };

    constructor() {
        super();
        this.currentLang = 'it';
        this.theme = 'light';
    }

    static styles = css`
        :host {
            display: block;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
        }

        nav {
            background-color: var(--bg-navbar, #2b6cb0);
            height: 48px;
            padding: 0 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid var(--border-color, #ffffff);
            border-radius: 8px;
            margin: 0.5rem;
        }

        .nav-links {
            display: flex;
            gap: 1rem;
        }

        .nav-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        a {
            color: var(--text-color, #ffffff);
            text-decoration: none;
            padding: 0.5rem;
            border: 2px solid var(--border-color, #ffffff);
            border-radius: 4px;
        }

        select, button {
            background: transparent;
            border: 2px solid var(--border-color, #ffffff);
            border-radius: 4px;
            color: var(--text-color, #ffffff);
            padding: 0.25rem;
            cursor: pointer;
        }
    `;

    render() {
        return html`
            <nav>
                <div class="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">Chi Sono</a>
                    <a href="#tech-skills">Competenze</a>
                    <a href="#contacts">Contatti</a>
                </div>
                
                <div class="nav-controls">
                    <select @change=${this._handleLanguageChange}>
                        <option value="it" ?selected=${this.currentLang === 'it'}>🇮🇹</option>
                        <option value="en" ?selected=${this.currentLang === 'en'}>🇬🇧</option>
                    </select>
                    
                    <button @click=${this._toggleTheme}>
                        ${this.theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>
        `;
    }

    _handleLanguageChange(e) {
        this.currentLang = e.target.value;
        this.dispatchEvent(new CustomEvent('language-change', {
            detail: { language: this.currentLang },
            bubbles: true,
            composed: true
        }));
    }

    _toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.dispatchEvent(new CustomEvent('theme-change', {
            detail: { theme: this.theme },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('nav-bar', NavBar); 
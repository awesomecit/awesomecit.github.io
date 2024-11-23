import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { THEMES, THEME_CONFIG, LANGUAGES } from '../constants.js';
import { translate } from '../translations.js';

export class NavBar extends LitElement {
    static properties = {
        currentLang: { type: String },
        theme: { type: String },
        isMenuOpen: { type: Boolean }
    };

    constructor() {
        super();
        this.currentLang = 'it';
        this.theme = THEMES.LIGHT;
        this.isMenuOpen = false;
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = THEME_CONFIG[this.theme].textColor;
        const navBg = THEME_CONFIG[this.theme].mainBackground;
        
        return html`
            <nav class="fixed top-0 left-0 right-0 z-50">
                <div class="${navBg} transition-colors duration-300">
                    <div class="px-4 h-12 flex justify-between items-center">
                        <button @click=${this._toggleMenu} 
                                class="md:hidden ${textColor} hover:bg-white/10 p-2">
                            ${this.isMenuOpen ? 'X' : '☰'}
                        </button>

                        <div class="hidden md:flex items-center space-x-3">
                            <a href="#home" class="${textColor} px-3 py-1.5 hover:bg-white/10">
                                ${translate('HOME', this.currentLang)}
                            </a>
                            <a href="#tech-skills" class="${textColor} px-3 py-1.5 hover:bg-white/10">
                                ${translate('SKILLS', this.currentLang)}
                            </a>
                            <a href="#contacts" class="${textColor} px-3 py-1.5 hover:bg-white/10">
                                ${translate('CONTACTS', this.currentLang)}
                            </a>
                        </div>
                        
                        <div class="flex items-center space-x-3">
                            <select @change=${this._handleLanguageChange} 
                                    class="bg-transparent text-white px-3 py-1.5 cursor-pointer hover:bg-white/10 rounded">
                                <option value="it" ?selected=${this.currentLang === 'it'}>${LANGUAGES.IT}</option>
                                <option value="en" ?selected=${this.currentLang === 'en'}>${LANGUAGES.EN}</option>
                            </select>
                            
                            <button @click=${this._handleThemeToggle} 
                                    class="bg-transparent text-white px-3 py-1.5 cursor-pointer hover:bg-white/10 rounded">
                                ${this.theme === THEMES.DARK ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>

                    ${this.isMenuOpen ? html`
                        <div class="md:hidden px-4 py-2 border-t-2 border-white">
                            <div class="flex flex-col space-y-2">
                                <a href="#home" class="${textColor} px-3 py-1.5 hover:bg-white/10">${translate('HOME', this.currentLang)}</a>
                                <a href="#about" class="${textColor} px-3 py-1.5 hover:bg-white/10">${translate('ABOUT', this.currentLang)}</a>
                                <a href="#tech-skills" class="${textColor} px-3 py-1.5 hover:bg-white/10">${translate('SKILLS', this.currentLang)}</a>
                                <a href="#contacts" class="${textColor} px-3 py-1.5 hover:bg-white/10">${translate('CONTACTS', this.currentLang)}</a>
                            </div>
                        </div>
                    ` : ''}
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

    _handleThemeToggle() {
        const newTheme = this.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        this.dispatchEvent(new CustomEvent('theme-change', { 
            detail: { theme: newTheme }
        }));
    }

    _toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}

customElements.define('nav-bar', NavBar); 
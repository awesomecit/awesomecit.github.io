import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { translate } from '../../translations.js';

export class TechSkillsSection extends LitElement {
    static properties = {
        theme: { type: String },
        currentLang: { type: String }
    };

    constructor() {
        super();
        this.theme = 'dark';
        this.currentLang = 'it';
    }

    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-bg-navbar/90' : 'text-bg-main';
        const backgroundStyle = this.theme === 'dark' ? 
            'bg-gray-900/80 border-gray-700' : 
            'bg-white/80 border-gray-200';

        return html`
            <section id="techskills" class="container mx-auto px-4 py-8 flex flex-col items-center text-center">
                <div class="w-full p-6 ${backgroundStyle} backdrop-blur-sm rounded-lg border">
                    <h2 class="${textColor} text-3xl font-bold mb-8">
                        ${translate('TECH_SKILLS', this.currentLang)}
                    </h2>
                </div>
            </section>
        `;
    }
}

customElements.define('tech-skills-section', TechSkillsSection); 
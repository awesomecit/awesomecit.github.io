import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class TechSkillsSection extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        const textColor = this.theme === 'dark' ? 'text-bg-main-dark' : 'text-bg-main';
        return html`
            <section id="techskills" class="container mx-auto px-4 py-8 flex flex-col items-center text-center">
                <div class="w-full p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                    <h2 class="${textColor} text-3xl font-bold mb-8">Tech Skills</h2>
                </div>
            </section>
        `;
    }
}

customElements.define('tech-skills-section', TechSkillsSection); 
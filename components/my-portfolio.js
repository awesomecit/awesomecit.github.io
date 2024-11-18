import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MyPortfolio extends LitElement {
    static styles = css`
        :host {
            display: block;
            min-height: 100vh;
            background-color: var(--bg-main, #1a365d);
            color: var(--text-color, #ffffff);
        }

        .container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            font-family: Arial, sans-serif;
        }
    `;

    render() {
        return html`
            <div class="container">
                Hello World
            </div>
        `;
    }
}

customElements.define('my-portfolio', MyPortfolio);

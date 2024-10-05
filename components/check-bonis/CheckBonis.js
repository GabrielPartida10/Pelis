class CheckBonis extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        this.loadHTML('./components/check-bonis/template.html').then(templateContent => {
            const template = document.createElement('template');
            template.innerHTML = templateContent;
            shadow.appendChild(template.content.cloneNode(true));

            this.loadCSS('./components/check-bonis/styles.css').then(cssText => {
                const style = document.createElement('style');
                style.textContent = cssText;
                shadow.appendChild(style);
            });
        });
    }

    async loadHTML(url) {
        const response = await fetch(url);
        return await response.text();
    }

    async loadCSS(url) {
        const response = await fetch(url);
        return await response.text();
    }
}


customElements.define('check-bonis', CheckBonis);

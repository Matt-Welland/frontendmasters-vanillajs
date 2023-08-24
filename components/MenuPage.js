export class MenuPage extends HTMLElement {
    constructor() {
        super();

        // Create shadow DOM
        this.root = this.attachShadow({mode: "open"});

        // Create styles and add to shadow DOM
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        // Function to Fetch CSS file and add to shadow DOM's styles
        const  loadCSS = async () => {
            const request = await fetch("./components/MenuPage.css");
            const css = await request.text();
            styles.textContent = css;
        }

        // Call the function
        loadCSS();
    }

    // When the component is attached to the shadowDOM
    connectedCallback() {
        // Access the template
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}

customElements.define("menu-page", MenuPage);
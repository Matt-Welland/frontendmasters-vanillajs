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

        // Listen for menu change event
        window.addEventListener("appmenuchange", () => {
            this.render();
        });
        this.render();
    }

    render() {
        if( app.store.menu ) {
            this.root.querySelector("#menu").innerHTML = "";
            for (let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'></ul>
                `;
                this.root.querySelector("#menu").appendChild(liCategory);

                category.products.forEach(product => {
                    const item = document.createElement("product-item");
                    item.dataset.product = JSON.stringify(product);
                    liCategory.querySelector("ul").appendChild(item);
                })
            }
        } else {
            this.root.querySelector("#menu").innerHTML = "<p>Loading...</p>";
        }
    }
}

customElements.define("menu-page", MenuPage);
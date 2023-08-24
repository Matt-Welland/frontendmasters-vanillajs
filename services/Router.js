const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                console.log("Link clicked");
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        });

        // # This listens for the user to click the back or forward button
        window.addEventListener("popstate", event => {
           Router.go(event.state.route, false); // # false means don't add to history
        });

        // Check the initial URL of the page
        Router.go(location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log( `Going to ${route}`);

        // # This is the "router" part of the router
        if( addToHistory ) {
            history.pushState({ route }, "", route );
        }

        // # This is the "controller" part of the router
        let pageElement = null;

        switch(route) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;

            case "/order":
                pageElement = document.createElement("order-page");
                pageElement.textContent = "Order";
                break;

            default:
                if( route.startsWith("/product-") ) {
                    pageElement = document.createElement("details-page");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.productId = paramId;
                }
        }

        if( pageElement ) {
            // # This is the "view" part of the router
            const cache = document.querySelector("main")
            cache.innerHTML = "";
            cache.appendChild(pageElement);

            // # This resets the scroll position to the top of the page
            window.scrollX = 0;
            window.scrollY = 0;
        }

    }
}

export default Router
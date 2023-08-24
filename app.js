import API from './services/API.js';
import Store from './services/Store.js';
import {loadData} from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import {MenuPage} from  "./components/MenuPage.js";
import {OrderPage} from "./components/OrderPage.js";
import {DetailsPage} from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

// # This creates a global variable called "app" that can be accessed from anywhere
window.app = {};
app.store = Store;
app.router = Router;

// # This waits for the window to load before running the code inside
//
// The difference between "DOMContentLoaded" and "load" is that...
// DOMContentLoaded waits for the HTML and CSS to load, but not images
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
});

window.addEventListener( "appcartchange", event => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce(
        (acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty === 0;
})
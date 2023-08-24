import API from './services/API.js';
import Store from './services/Store.js';
import {loadData} from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import {MenuPage} from  "./components/MenuPage.js";
import {OrderPage} from "./components/OrderPage.js";
import {DetailsPage} from "./components/DetailsPage.js";

// # This creates a global variable called "app" that can be accessed from anywhere
window.app = {};
app.store = Store;
app.router = Router;

// # This waits for the window to load before running the code inside
//
// The difference between "DOMContentLoaded" and "load" is that...
// DOMContentLoaded waits for the HTML and CSS to load, but not images
window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    app.router.init();
});

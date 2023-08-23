import API from './services/API.js';
import Store from './services/Store.js';
import {loadData} from "./services/Menu.js";

// # This creates a global variable called "app" that can be accessed from anywhere
window.app = {};
app.store = Store;

// # This waits for the window to load before running the code inside
//
// The difference between "DOMContentLoaded" and "load" is that...
// DOMContentLoaded waits for the HTML and CSS to load, but not images
window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
});

// Import the necessary modules
import TabManager from './tab-management.js';
import ValueWatcher from './value_watcher.js';

window.onload = () => {
    const tabManager = new TabManager(1);
    const O_valueWatcher = new ValueWatcher(1000);
    O_valueWatcher.start();

    // Make handleTabClick available in the global scope
    globalThis.handleTabClick = tabManager.handleTabClick;
}

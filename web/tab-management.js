const I_DEFAULT_TAB_ID = 1;

const handleTabClick = (id) => {
    const A_tabLinks = document.querySelectorAll('.tab-link');
    const A_tabs = document.querySelectorAll('.tab-content');

    // Update all tabs
    A_tabLinks.forEach((E_link) => {
        // Clear all tab links from active class
        E_link.classList.remove('active');
        // Clear all links from selected ARIA attribute
        E_link.setAttribute('aria-selected', 'false');
    });

    const E_activeLink = document.querySelector(`.tab-link:nth-child(${id})`);
    if (E_activeLink) {
        E_activeLink.classList.add('active');
        E_activeLink.setAttribute('aria-selected', 'true');
        E_activeLink.focus();
    }

    // Update all tab panels
    A_tabs.forEach((E_tab) => {
        E_tab.classList.remove('active');
    });
    const E_activeTab = document.querySelector(`.tab-content:nth-child(${id})`);
    if (E_activeTab) {
        E_activeTab.classList.add('active');
    }
};

document.querySelector(`.tab-link:nth-child(${I_DEFAULT_TAB_ID})`).classList.add('active');
document.querySelector(`.tab-link:nth-child(${I_DEFAULT_TAB_ID})`).setAttribute('aria-selected', 'true');
document.querySelector(`.tab-content:nth-child(${I_DEFAULT_TAB_ID})`).classList.add('active');

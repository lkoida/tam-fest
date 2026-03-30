export function topMenuBuild(menu) {
    const menuContainer = document.querySelector('.menu');
    const menuTemplate = document.querySelector('#menu-template');




   menu.forEach(({name, href}) => {
        const menuItemClone = document.importNode(menuTemplate.content, true)
        const anchor = menuItemClone.querySelector('a')
        anchor.textContent = name
        anchor.href = href;

        menuContainer.appendChild(menuItemClone)
    })
}

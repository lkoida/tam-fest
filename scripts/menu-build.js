export function menuBuild(menu) {
    const menuContainers = document.querySelectorAll('.menu.desktop, .menu.mobile');
    const menuTemplate = document.querySelector('#menu-template');


    for (let menuContainer of menuContainers) {
        menu.forEach(({name, href}) => {
            const menuItemClone = document.importNode(menuTemplate.content, true)
            const anchor = menuItemClone.querySelector('a')
            anchor.textContent = name
            anchor.href = href;

            menuContainer.appendChild(menuItemClone)
        })
    }
}

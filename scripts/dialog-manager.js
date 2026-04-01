
const dialog = document.querySelector('.menu-dialog-mobile');
const action = document.querySelector('.menu-invoker-mobile');
const close = dialog.querySelector('.menu-close');

// temp solution
// document.addEventListener('DOMContentLoaded', () => {
//     dialog.showModal()
// })
close.addEventListener('click', () => {
    dialog.close()
})
action.addEventListener('click', () => {
    dialog.showModal()
})


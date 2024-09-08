const collapseButton = document.querySelector('.btn-collapse');
const collapseArea = document.querySelector('.collapse-area');
let isCollapsed = false;

collapseButton.addEventListener('click', () => {
    if (isCollapsed) {
        collapseArea.classList.remove('collapsing');
        collapseArea.classList.add('expanding');
    } else {
        collapseArea.classList.remove('expanding');
        collapseArea.classList.add('collapsing');
    }
    isCollapsed = !isCollapsed;
});
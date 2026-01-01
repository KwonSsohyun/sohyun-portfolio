document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.rolling-list');
    if (!list) return;

    const items = Array.from(list.children);

    while (list.scrollWidth < window.innerWidth * 2) {
        items.forEach(item => {
        list.appendChild(item.cloneNode(true));
        });
    }
});
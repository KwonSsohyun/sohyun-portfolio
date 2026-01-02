const tabs = document.querySelectorAll('.projects-filter .tab');
const items = document.querySelectorAll('.projects-list li');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    items.forEach(item => {
      const categories = item.dataset.category;

      if (target === 'all' || categories.includes(target)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

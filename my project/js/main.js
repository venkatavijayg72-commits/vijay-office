// Portfolio Filtering

document.addEventListener('DOMContentLoaded', function () {

  const filterButtons = document.querySelectorAll('.portfolio-filters li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length && portfolioItems.length) {

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {

        // active class toggle
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.dataset.filter;

        portfolioItems.forEach(item => {
          if (filterValue === 'all') {
            item.classList.remove('hide');
          } else {
            item.classList.toggle(
              'hide',
              !item.classList.contains(filterValue)
            );
          }
        });

      });
    });

  }

});
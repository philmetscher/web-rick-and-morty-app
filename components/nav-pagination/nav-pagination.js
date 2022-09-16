const pageSelector = document.querySelector('[data-js="numberFrom"]');
const pagesSelector = document.querySelector('[data-js="numberTo"]');
let page = 1;

function refreshPaginationIndex(target, pages) {
  target.addEventListener('click', event => {
    if (target.getAttribute('data-js') == 'button-prev') {
      if (page != 1) {
        page--;
        setPaginationIndex(page, pages);
      }
    } else if (!(page >= pages)) {
      page++;
      setPaginationIndex(page, pages);
    }
  });
}

function setPaginationIndex(page, pages) {
  if (page && pages) {
    pageSelector.textContent = page;

    if (pagesSelector.textContent != pages) {
      pagesSelector.textContent = pages;
    }
  }
}

export {page, setPaginationIndex, refreshPaginationIndex};

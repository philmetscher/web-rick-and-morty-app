const pageSelector = document.querySelector('[data-js="numberFrom"]');
const pagesSelector = document.querySelector('[data-js="numberTo"]');

function refreshPaginationIndex(target, page, pages) {
  target.addEventListener('click', event => {
    if (page != pageSelector.textContent && page >= 1 && page != pages) {
      setUrlPage(page);
      setPaginationIndex(page, pages);
    } else {
      if (page == pageSelector.textContent) {
        console.error(
          'refreshPaginationIndex: page == pageSelector.textContent',
        );
      } else if (page < 1) {
        console.error('refreshPaginationIndex: page < 1');
      } else if (page == pages) {
        console.error('refreshPaginationIndex: page == pages');
      } else {
        console.error(
          'refreshPaginationIndex: please contact the administration for more information!',
        );
      }
    }
  });
}

function setPaginationIndex(page, pages) {
  if (page && pages) {
    pageSelector.textContent = page;

    pagesSelector.textContent != pages
      ? (pagesSelector.textContent = pages)
      : '';

    setUrlPage(page);
  }
}

function setUrlPage(page) {
  const url = new URL(window.location);
  url.searchParams.set('page', page);
  window.history.pushState(null, '', url.toString());
}

export {setPaginationIndex, refreshPaginationIndex};

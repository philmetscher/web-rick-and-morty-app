const pageSelector = document.querySelector('[data-js="numberFrom"]');
const pagesSelector = document.querySelector('[data-js="numberTo"]');

function refreshPaginationIndex(
  target,
  page,
  pages,
  searchQuery,
  fetchCallback,
) {
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
    console.log('before query update: ' + searchQuery);
    searchQuery = searchQuery + `&page=${page}`;
    console.log('after query update: ' + searchQuery);

    const fetchURL = `https://rickandmortyapi.com/api/character/?${searchQuery}`;
    fetchCallback(fetchURL);
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

export {setPaginationIndex, refreshPaginationIndex};

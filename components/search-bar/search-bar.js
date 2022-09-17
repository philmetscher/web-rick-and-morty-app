function searchBarForm(searchQuery, fetchCallback) {
  const form = document.querySelector('[data-js="search-bar"]');
  const cardContainer = document.querySelector('[data-js="card-container"]');

  form.addEventListener('input', event => {
    event.preventDefault();
    cardContainer.innerHTML = '';

    const formData = new FormData(form);
    const values = Object.fromEntries(formData);

    searchQuery = `name=${values.query}`;
    const fetchURL = `https://rickandmortyapi.com/api/character/?&${searchQuery}`;
    fetchCallback(fetchURL);
  });
}

export {searchBarForm};

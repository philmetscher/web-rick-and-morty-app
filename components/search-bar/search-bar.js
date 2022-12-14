function searchBarForm() {
  const form = document.querySelector('[data-js="search-bar"]');
  const cardContainer = document.querySelector('[data-js="card-container"]');

  form.addEventListener('submit', event => {
    event.preventDefault();
    cardContainer.innerHTML = '';

    const formData = new FormData(form);
    const values = Object.fromEntries(formData);
    let searchQuery = values.query;

    const fetchURL = `https://rickandmortyapi.com/api/character/?&name=${searchQuery}`;

    fetchCharactersAndRender(fetchURL);
  });
}

export {searchBarForm};

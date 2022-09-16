console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

fetchCharacters();

/* --- fetch --- */
function fetchCharacters() {
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(apiData => {
      processData(apiData.results);
    });
}

function processData(data) {
  console.log(data.length);
  console.log(data[0].image);
  console.log(data[0].name);
  console.log(data[0].status);
  console.log(data[0].type);
  console.log(data[0].episode.length);
}

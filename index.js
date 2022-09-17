import createCharacterCard from './components/card/card.js';
import {searchBarForm} from './components/search-bar/search-bar.js';
import {
  setPaginationIndex,
  refreshPaginationIndex,
} from './components/nav-pagination/nav-pagination.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');

// States
let page = 1;
let maxPage = 50;
let searchQuery = '';

// fetch once, when page is loaded
const firstFetch = 'https://rickandmortyapi.com/api/character'; // dummy URL
fetchCharactersAndRender(firstFetch);

searchBarForm(searchQuery, fetchCharactersAndRender);

//first set of the index
setPaginationIndex(page, maxPage);
//refresh pagination onclick
refreshPaginationIndex(
  prevButton,
  page,
  maxPage,
  searchQuery,
  fetchCharactersAndRender,
);
refreshPaginationIndex(
  nextButton,
  page,
  maxPage,
  searchQuery,
  fetchCharactersAndRender,
);

/* --- functions --- */
// fetch
async function fetchCharactersAndRender(fetchURL) {
  try {
    const response = await fetch(fetchURL);
    const data = await response.json();
    console.log(data);
    const apiData = data.results;
    processData(apiData);
  } catch (error) {
    console.error(error);
  }
}

// takes apiData.results (character array from API)
function processData(data) {
  const characters = data.map(character => {
    const characterObj = {
      source: character.image,
      name: character.name,
      info: {
        status: character.status,
        type: character.type,
        occurrences: character.episode.length,
      },
    };
    return characterObj;
  });
  renderCards(characters);
}

function renderCards(charactersArray) {
  cardContainer.innerHTML = '';
  charactersArray.forEach(character => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}

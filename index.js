// import createCharacterCard from ""
// import

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

// dummy URL:
const firstFetch = 'https://rickandmortyapi.com/api/character';
fetchCharactersAndRender(firstFetch);

/* --- fetch --- */
async function fetchCharactersAndRender(fetchURL) {
  try {
    const response = await fetch(fetchURL);
    const data = await response.json();
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
  console.log(characters);
  //renderCards(characters);
}

function renderCards(charactersArray) {
  cardContainer.innerHTML = '';
  charactersArray.forEach(character => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}

// import createCharacterCard

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
    const card = createCharacterCard(character); // give charac obj or single parameters?
    cardContainer.append(card);
  });
}

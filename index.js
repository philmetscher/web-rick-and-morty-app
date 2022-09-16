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
let maxPage = 50;
let page = 1;
let searchQuery = '';

//first set of the index
setPaginationIndex(1, maxPage);

//refresh pagination onclick
refreshPaginationIndex(prevButton, maxPage);
refreshPaginationIndex(nextButton, maxPage);

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
let maxPage = 1;
let page = 1;
let searchQuery = '';

setPaginationIndex(4, 50);
refreshPaginationIndex(prevButton, 3, 50);
refreshPaginationIndex(nextButton, 5, 50);

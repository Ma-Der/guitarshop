import { TITLE, ASC } from './sortVariables';

function compareTitleASC(a, b) {
  return a.title.localeCompare(b.title);
}

function compareTitleDESC(a, b) {
  return b.title.localeCompare(a.title);
}

function sortByTitle(guitars, direction) {
  direction === ASC
    ? guitars.sort(compareTitleASC)
    : guitars.sort(compareTitleDESC)
  return guitars;
}

function comparePriceASC(a, b) {
  return a.price - b.price;
}

function comparePriceDESC(a, b) {
  return b.price - a.price;
}

function sortByPrice(guitars, direction) {
  direction === ASC
    ? guitars.sort(comparePriceASC)
    : guitars.sort(comparePriceDESC)
  return guitars;
}

export function sortGuitars(guitars, sortBy, direction) {
  if(sortBy === TITLE) {
    return sortByTitle(guitars, direction);
  }
  else return sortByPrice(guitars, direction);
}

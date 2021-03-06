export const GET_GUITARS = 'GET_GUITARS';
export const GET_GUITAR = 'GET_GUITAR';

export function getGuitar(guitarId) {
  return {
    type: GET_GUITAR,
    guitarId,
  }
}

export function getGuitars(by, direction, currentPage) {
  return {
    type: GET_GUITARS,
    by,
    direction,
    currentPage
  }
}

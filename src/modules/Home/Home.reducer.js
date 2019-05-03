import { GET_GUITAR, GET_GUITARS } from './Home.actions';
import guitarData from '../../data/guitars.json';

const initialState = { guitars: guitarData, pickedGuitar: {}, currentPage: 0, pages: 0, itemsOnPage: 2 };

function paginateGuitars(guitars, itemsOnPage, currentPage) {
  return guitars.slice(itemsOnPage * currentPage, itemsOnPage * (currentPage + 1));
}
const HomeReducer = function (state = initialState, action) {
  switch (action.type) {

    case GET_GUITAR:
      return  {...state, pickedGuitar: state.guitars.find(guit => guit.id === action.guitarId)};

    case GET_GUITARS:
      let guitars = guitarData;
      const pages = Math.ceil(guitars.length / state.itemsOnPage);
      const currentPage = action.currentPage !== undefined ? action.currentPage : 0;
      guitars = paginateGuitars(guitars, state.itemsOnPage, currentPage);
      return {...state, guitars: guitars, pages: pages, currentPage: currentPage};

    default:
      return state;
  }
}


export default HomeReducer;

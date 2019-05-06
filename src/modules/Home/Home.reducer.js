import { GET_GUITAR, GET_GUITARS } from './Home.actions';
import guitarData from '../../data/guitars.json';
import { sortGuitars } from '../../data/SortFunctions';

const initialState =
                    {
                      guitars: guitarData,
                      pickedGuitar: {},
                      currentPage: 0,
                      pages: 0,
                      itemsOnPage: 2,
                      sort: {
                        by: 'by',
                        direction: 'direction'
                      }
                    };

const HomeReducer = function (state = initialState, action) {
  switch (action.type) {

    case GET_GUITAR:
      return  {...state, pickedGuitar: state.guitars.find(guit => guit.id === action.guitarId)};

    case GET_GUITARS:
      let guitars = guitarData;

      let sortData = state.sort;
      if(action.by !== undefined || state.sort !== null) {
        sortData = {
          by: action.by !== undefined ? action.by : state.sort.by,
          direction: action.direction !== undefined ? action.direction : state.sort.direction
        }
        guitars = sortGuitars(guitars, sortData.by, sortData.direction);
      }

      const pages = Math.ceil(guitars.length / state.itemsOnPage);
      const currentPage = action.currentPage !== undefined ? action.currentPage : 0;
      guitars = guitars.slice(state.itemsOnPage * currentPage, state.itemsOnPage * (currentPage + 1));

      return {...state, guitars: guitars, pages: pages, currentPage: currentPage, sort: sortData};

    default:
      return state;
  }
}


export default HomeReducer;

import { GET_GUITAR, GET_GUITARS } from './Home.actions';
import guitarData from '../../data/guitars.json';

const initialState = { guitars: guitarData, pickedGuitar: {} };


const HomeReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_GUITAR:
      return  {
        ...state,
        pickedGuitar: state.guitars.find(guit => guit.id === action.id)
      };
    case GET_GUITARS:
      return {
        guitars: state.guitars
      };
    default:
      return state;
  }
}


export default HomeReducer;

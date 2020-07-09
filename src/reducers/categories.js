import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/index';


const initialState = {
  error: null,
  categories: []
};

function categories(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload};
    default:
      return state;
  }
}

export default categories;
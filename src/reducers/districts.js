import {
  FETCH_DISTRICTS_REQUEST,
  FETCH_DISTRICTS_FAILURE,
  FETCH_DISTRICTS_SUCCESS,
} from '../actions/index';


const initialState = {
  error: null,
  districts: []
};

function districts(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISTRICTS_REQUEST:
      return { ...state };
    case FETCH_DISTRICTS_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_DISTRICTS_SUCCESS:
      return { ...state, districts: action.payload };
    default:
      return state;
  }
}

export default districts;
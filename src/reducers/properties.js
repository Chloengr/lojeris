import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_FAILURE,
  FETCH_PROPERTIES_SUCCESS,
} from '../actions/index';


const initialState = {
  loading: false,
  error: null,
  properties: []
};

function properties(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROPERTIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, properties: action.payload, loading: false };
    default:
      return state;
  }
}

export default properties;
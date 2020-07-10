import {
  FETCH_PROPERTIES_REQUEST,
  FETCH_PROPERTIES_FAILURE,
  FETCH_PROPERTIES_SUCCESS,
  PROPERTY_FORM_HANDLE_CHANGE,
  CREATE_PROPERTY_REQUEST,
  CREATE_PROPERTY_FAILURE,
  CREATE_PROPERTY_SUCCESS
} from '../actions/index';

const initialPropertiesFormState = {
  price: '',
  surface: 0,
  bedroom: 0,
  description: '',
  category: {
    name: '',
    properties: [
      ''
    ]
  },
  district: {
    name: '',
    properties: [
      ''
    ]
  },
  features: [
    {
      name: '',
      properties: [ '' ]
    }
  ],
  createdAt: ''
}
const initialState = {
  loading: false,
  error: null,
  properties: [],
  propertiesForm: initialPropertiesFormState
};

function properties(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROPERTIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROPERTIES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case FETCH_PROPERTIES_SUCCESS:
      return { ...state, properties: action.payload, loading: false };
    case PROPERTY_FORM_HANDLE_CHANGE:
      return {
        ...state,
        propertiesForm: {
          ...state.propertiesForm,
          [action.payload.name]: action.payload.value
        }
      };
    case CREATE_PROPERTY_REQUEST:
      return { ...state, loading: true };
    case CREATE_PROPERTY_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case CREATE_PROPERTY_SUCCESS:
      return {
        ...state,
        properties: [ ...state.properties, action.payload ],
        propertiesForm: initialPropertiesFormState,
        loading: false
      };
    default:
      return state;
  }
}

export default properties;
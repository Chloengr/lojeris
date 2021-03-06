export const FETCH_PROPERTIES_REQUEST = 'FETCH_PROPERTIES_REQUEST';
export const FETCH_PROPERTIES_FAILURE = 'FETCH_PROPERTIES_FAILURE';
export const FETCH_PROPERTIES_SUCCESS = 'FETCH_PROPERTIES_SUCCESS';
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_DISTRICTS_REQUEST = 'FETCH_DISTRICTS_REQUEST';
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE';
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS';
export const CREATE_PROPERTY_REQUEST = 'CREATE_PROPERTY_REQUEST';
export const CREATE_PROPERTY_FAILURE = 'CREATE_PROPERTY_FAILURE';
export const CREATE_PROPERTY_SUCCESS = 'CREATE_PROPERTY_SUCCESS';
export const PROPERTY_FORM_HANDLE_CHANGE = 'PROPERTY_FORM_HANDLE_CHANGE'; 

export function fetchProperties() {
  return dispatch => {
    dispatch(fetchPropertiesRequest());
    fetch('http://lojeris.api.pierre-jehan.com/properties')
      .then(response =>  response.json())
      .then(data => dispatch(fetchPropertiesSuccess(data['hydra:member'])))
      .catch(err => dispatch(fetchPropertiesFailure(err)))
  }
}

export function fetchPropertiesRequest() {
  return { type: FETCH_PROPERTIES_REQUEST };
}

export function fetchPropertiesFailure(error) {
  return { type: FETCH_PROPERTIES_FAILURE, payload: error };
}

export function fetchPropertiesSuccess(properties) {
  return { type: FETCH_PROPERTIES_SUCCESS, payload: properties };
}

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesRequest());
    fetch('http://lojeris.api.pierre-jehan.com/categories')
      .then(response => response.json())
      .then(data => dispatch(fetchCategoriesSuccess(data['hydra:member'])))
      .catch(err => dispatch(fetchCategoriesFailure(err)))
  }
}

export function fetchCategoriesRequest() {
  return { type: FETCH_CATEGORIES_REQUEST };
}

export function fetchCategoriesFailure(error) {
  return { type: FETCH_CATEGORIES_FAILURE, payload: error };
}

export function fetchCategoriesSuccess(categories) {
  return { type: FETCH_CATEGORIES_SUCCESS, payload: categories };
}


export function fetchDistricts() {
  return dispatch => {
    dispatch(fetchDistrictsRequest());
    fetch('http://lojeris.api.pierre-jehan.com/districts')
      .then(response => response.json())
      .then(data => dispatch(fetchDistrictsSuccess(data['hydra:member']))) 
      .catch(err => dispatch(fetchDistrictsFailure(err)))
  }
}

export function fetchDistrictsRequest() {
  return { type: FETCH_DISTRICTS_REQUEST };
}

export function fetchDistrictsFailure(error) {
  return { type: FETCH_DISTRICTS_FAILURE, payload: error };
}

export function fetchDistrictsSuccess(districts) {
  return { type: FETCH_DISTRICTS_SUCCESS, payload: districts };
}

export function createProperty() {
  return (dispatch, getState) => {
    const propertyFormData = getState().properties.propertiesForm;
    dispatch(createPropertyRequest());
    fetch('http://lojeris.api.pierre-jehan.com/properties', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(propertyFormData)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          dispatch(createPropertyFailure(response.statusText));
        }
      })
      .then(data => dispatch(createPropertySuccess(data)))
      .catch(err => dispatch(createPropertyFailure(err)))
  }
}

export function createPropertyRequest() {
  return { type: CREATE_PROPERTY_REQUEST };
}

export function createPropertyFailure(error) {
  return { type: CREATE_PROPERTY_FAILURE, payload: error };
}

export function createPropertySuccess(property) {
  return { type: CREATE_PROPERTY_SUCCESS, payload: property };
}

export function propertyFormHandleChange(name, value) {
  return {
    type: PROPERTY_FORM_HANDLE_CHANGE,
    payload: { name: name, value: value }
  };
}
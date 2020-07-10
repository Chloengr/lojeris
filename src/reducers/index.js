import {combineReducers} from 'redux'
import properties from './properties'
import categories from './categories'
import districts from './districts'

export default combineReducers({ properties, categories, districts })
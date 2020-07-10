import {SEARCH} from "../actions";

const initialState = {}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH: {
            const {value} = action;
            const tasks = state.contents.filter((val) => val.includes(value));
            return {...state, value, tasks};
        }
        default:
            return state;
    }
}
import { createStore, combineReducers } from 'redux'

const ADD_TAGS = 'ADD_TAGS'
export const addTagsAction = tags => ({
    type: ADD_TAGS,
    tags
})

const tags = (state = [], action) => {
    switch (action.type) {
        case ADD_TAGS:
            return [...action.tags]
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    tags
})

export const store = createStore(rootReducer)


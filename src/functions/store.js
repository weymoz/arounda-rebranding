import { createStore, combineReducers } from 'redux'

const ADD_TAGS = 'ADD_TAGS'

const addTagsAction = tags => ({
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


const sampleTags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]

const store = createStore(rootReducer, {tags: sampleTags})
console.log(store.getState())

export { store, addTagsAction };

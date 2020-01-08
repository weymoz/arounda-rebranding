import { createStore, combineReducers } from 'redux'

const ADD_POST = 'ADD_POST'
export const addPostAction = post => ({
    type: ADD_POST,
    title: post.title
})

const posts = (state = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [
                ...state,
                {
                    title: action.title
                }
            ]
    }
}

const rootReducer = combineReducers({
    posts
})

export const store = createStore(rootReducer)


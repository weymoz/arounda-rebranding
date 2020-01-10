import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ADD_TAGS } from "./actions";

const tags = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAGS:
      let allTags = action.payload.reduce(
        (acc, val) => ({ ...acc, [val.id]: val }),
        {}
      );
      const tagIds = Object.keys(allTags);
      return {
        allTags,
        tagIds
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  tags
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

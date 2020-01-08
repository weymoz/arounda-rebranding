import { createStore } from 'redux';

const initialState = {
    menuIsOpen: false
}
const TOGGLE_MENU = 'TOGGLE_MENU';

function toggleMenu() {
    return {type: TOGGLE_MENU}
}

const rootReducer = (state = initialState, action) => {

    if(action.type === TOGGLE_MENU) {
        return {
            ...state,
            menuIsOpen: !state.menuIsOpen
        }
    }
    return state;
}

export { toggleMenu };
export default createStore(rootReducer);

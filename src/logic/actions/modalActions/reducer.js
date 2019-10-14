import * as actionTypes from './actionTypes';

const initialState = {
    isAddItemModalOpen: false,
    screenToShow: 1
};

export default function addItemModalReducer(state = initialState, action) {
    switch (action.type) {
      case actionTypes.OPEN_ADD_ITEM_MODAL:
        return {
          ...state,
          isAddItemModalOpen: true
        };
      case actionTypes.CLOSE_ADD_ITEM_MODAL:
        return {
          ...state,
          isAddItemModalOpen: false
        };
      case actionTypes.INCREMENT_SCREEN_COUNTER:
          return {
            ...state,
            screenToShow: ++state.screenToShow
          };
      case actionTypes.DECREMENT_SCREEN_COUNTER:
          return {
            ...state,
            screenToShow: --state.screenToShow
          }
      default:
        return state;
    }
  }
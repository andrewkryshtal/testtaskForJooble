import * as actionTypes from './actionTypes';

const initialState = {
    isAddItemModalOpen: false
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
      default:
        return state;
    }
  }
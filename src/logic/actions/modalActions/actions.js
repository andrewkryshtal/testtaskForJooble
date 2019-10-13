import * as actionTypes from './actionTypes';

export function openAddItemModal() {
    return (dispatch) => {
        dispatch({type: actionTypes.OPEN_ADD_ITEM_MODAL});
    }
}

export function closeAddItemModal() {
    return (dispatch) => {
        dispatch({type: actionTypes.CLOSE_ADD_ITEM_MODAL});
    }
}

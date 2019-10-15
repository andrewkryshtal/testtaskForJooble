import * as actionTypes from './actionTypes';

const initialState = {
  collection: [],
  isCollectionFetching: false,
  isItemPosting: false
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COLLECTION:
      return {
        ...state,
        isCollectionFetching: true,
      };
    case actionTypes.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        isCollectionFetching: false,
        collection: action.data
      };
    case actionTypes.POST_ITEM:
      return {
        ...state,
        isItemPosting: true
      };
    case actionTypes.POST_ITEM_SUCCESS:
      return {
        ...state,
        isItemPosting: false
      };
    case actionTypes.POST_ITEM_ERROR:
      return {
        ...state,
        isItemPosting: false
      };
    default:
      return state;
  }
}

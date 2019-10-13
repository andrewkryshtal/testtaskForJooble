import * as actionTypes from './actionTypes';

const initialState = {
  collection: [],
  isCollectionFetching: false,
  itemIsPosting: false
};

export default function collection(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COLLECTION:
      return {
        ...state,
        isCollectionFetching: true,
      };
      case actionTypes.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        isItemFetching: false,
        collection: action.data
      };
    default:
      return state;
  }
}
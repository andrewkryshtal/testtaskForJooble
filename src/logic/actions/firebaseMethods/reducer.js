import * as actionTypes from './actionTypes';

const initialState = {
  item: {},
  isCollectionFetching: false,
  itemIsPosting: false
};

export default function collection(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FIREBASE_COLLECTION:
      return {
        ...state,
        isCollectionFetching: true,
        collection: action.payload
      };
      case actionTypes.GET_FIREBASE_COLLECTION_SUCCESS:
      return {
        ...state,
        isItemFetching: false,

      };
    default:
      return state;
  }
}
import * as actionTypes from './actionTypes';

const initialState = {
  collection: [],
  isCollectionFetching: false
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
    default:
      return state;
  }
}
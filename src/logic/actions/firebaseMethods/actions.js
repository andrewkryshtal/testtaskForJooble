import {base} from '../../../base'
import * as actionTypes from './actionTypes';

const firebaseEndpoint = process.env.REACT_APP_FIREBASE_APP_COLLECTION;

export function getCollection() {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_COLLECTION });

        base.collection(firebaseEndpoint).get()
            .then((querySnapshot) => {
                var collection = [];
                querySnapshot.forEach((doc) => {
                    collection.push(doc.data())
                });
                let type = actionTypes.GET_COLLECTION_SUCCESS;
                return dispatch(Object.assign({type}, {data: collection}));
            })
            .catch((error) => {
                dispatch({ type: actionTypes.GET_COLLECTION_ERROR });
                throw error;
            });
    };
  }

export function postItem(item) {

    console.log(item);
    debugger;
    return (dispatch) => {
        dispatch({ type: actionTypes.POST_ITEM });
        base.collection(firebaseEndpoint).doc(item.id).set(item)
            .then(function(docRef) {
                dispatch({ type: actionTypes.POST_ITEM_SUCCESS });
                dispatch(getCollection());
            })
            .catch(function(error) {
                dispatch({ type: actionTypes.POST_ITEM_ERROR });
                throw error;
            });
    }
}

export function deleteItem(item) {
    return (dispatch) => {
        dispatch({ type: actionTypes.DELETE_ITEM });
        base.collection(firebaseEndpoint).doc(item.id).delete()
            .then(() => {
                dispatch({ type: actionTypes.DELETE_ITEM_SUCCESS });
                dispatch(getCollection());
            })
            .catch((error) => {
                dispatch({ type: actionTypes.DELETE_ITEM_ERROR });
                throw error;
            });
    }
}

export function editItem(item) {
    return (dispatch) => {
        dispatch(postItem(item));
    }
}

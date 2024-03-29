import {base} from '../../common/base';
import * as actionTypes from './actionTypes';
import uuidv4 from 'uuid/v4';

const firebaseEndpoint = process.env.REACT_APP_FIREBASE_APP_COLLECTION;

export function getCollection() {
    return (dispatch) => {
        dispatch({ type: actionTypes.GET_COLLECTION });

        base.collection(firebaseEndpoint).get()
            .then((querySnapshot) => {
                let collection = [];
                querySnapshot.forEach((doc) => {
                    collection.push(doc.data())
                });
                let type = actionTypes.GET_COLLECTION_SUCCESS;
                return dispatch(Object.assign({type}, {data: collection}));
            })
            .catch((error) => {
                dispatch({ type: actionTypes.GET_COLLECTION_ERROR });
                console.error(error);
            });
    };
  }

export function postItem(item) {
    return (dispatch) => {
        dispatch({ type: actionTypes.POST_ITEM });
        if(!item.id) {
            item.id = uuidv4();
        }
        base.collection(firebaseEndpoint).doc(item.id).set(item)
            .then(function(docRef) {
                dispatch({ type: actionTypes.POST_ITEM_SUCCESS });
                dispatch(getCollection());
            })
            .catch(function(error) {
                dispatch({ type: actionTypes.POST_ITEM_ERROR });
                console.error(error);
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
                console.error(error);
            });
    }
}

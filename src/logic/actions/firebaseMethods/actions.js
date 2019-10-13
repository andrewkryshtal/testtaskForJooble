import {base} from '../../../base'
import * as actionTypes from './actionTypes';

export function getCollection() {
    base.get(process.env.REACT_APP_FIREBASE_APP_COLLECTION, { context: this })
    .then((data) => {
        let type = actionTypes.GET_FIREBASE_COLLECTION;
        let collection = data;
        return Object.assign({type}, collection);
    })
    .catch((err) => {
        throw err
    });
  }
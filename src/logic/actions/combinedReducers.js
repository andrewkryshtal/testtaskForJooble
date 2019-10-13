import {combineReducers} from 'redux';
import collection from './firebaseMethods/reducer';

const allReducers = combineReducers({
    collection: collection
})

export default allReducers;
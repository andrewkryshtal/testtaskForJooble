import {combineReducers} from 'redux';
import collection from './firebaseMethods/reducer';

const allReducers = combineReducers({
    fireBase: collection
})

export default allReducers;
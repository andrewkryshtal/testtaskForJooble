import {combineReducers} from 'redux';
import addItemModalReducer from './addItemModal/reducer';

const uiReducers = combineReducers({
    addItemModal: addItemModalReducer,
})

export default uiReducers;

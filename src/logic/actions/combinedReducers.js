import {combineReducers} from 'redux';
import dataReducer from './firebaseMethods/reducer';
import addItemModalReducer from './modalActions/reducer'

const allReducers = combineReducers({
    data: dataReducer,
    addItemModal: addItemModalReducer
})

export default allReducers;
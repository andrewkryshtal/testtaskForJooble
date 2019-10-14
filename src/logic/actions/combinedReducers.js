import {combineReducers} from 'redux';
import dataReducer from './firebaseMethods/reducer';
import addItemModalReducer from './modalActions/reducer'
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    data: dataReducer,
    addItemModal: addItemModalReducer,
    form: formReducer
})

export default allReducers;
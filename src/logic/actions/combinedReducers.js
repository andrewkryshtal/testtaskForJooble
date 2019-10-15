import {combineReducers} from 'redux';
import dataReducer from './data/reducer';
import uiReducers from './ui/combineReducers';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
    data: dataReducer,
    ui: uiReducers,
    form: formReducer
})

export default allReducers;

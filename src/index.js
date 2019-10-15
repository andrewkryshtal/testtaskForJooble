import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/application';
import { Provider } from 'react-redux';
import configureStore from './logic/common/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

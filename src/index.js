import React from 'react';
import ReactDOM from 'react-dom';
//now here we need to provide the store we created to the entire app
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
//we also need to import the store, because we need to point to redux, which store he needs tyo use.
import store from './store/index';

ReactDOM.render(
    /*now we wrap the entire app with the provider, just like in context api, 
    so that all of our components can access redux store and disatch action, or use the reducer.*/
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);

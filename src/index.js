import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Create Reducer
const feedbackReducer = (state = [], action) => {
    console.log('In reducer');
    if(action.type === 'SET_FEELING'){
        
    }
    else if(action.type === 'SET_UNDERSTANDING'){

    }
    else if(action.type === 'SET_SUPPORT'){

    }
    else if(aciton.type === 'SET_COMMENTS'){

    }
return state;
}

//Create Store
const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store = {reduxStore}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
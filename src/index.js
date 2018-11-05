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
        state = action.payload;
        console.log(action.payload);
    }
    else if(action.type === 'SET_UNDERSTANDING'){
        state = {...state, ...action.payload}
        console.log(action.payload);
    }
    else if(action.type === 'SET_SUPPORT'){
        state = {...state, ...action.payload}
        console.log(action.payload);
    }
    else if(action.type === 'SET_COMMENT'){
        state = {...state, ...action.payload}
        console.log(action.payload);
    }
    console.log(state);
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
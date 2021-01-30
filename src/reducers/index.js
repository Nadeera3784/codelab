import {combineReducers}  from 'redux';
import postReducer  from './post.js';
import categorysReducer  from './category.js';
import errorReducer  from './error.js';
import toastReducer  from './toasts.js';

export default combineReducers({
    posts  : postReducer,
    categories  : categorysReducer,
    errors : errorReducer,
    toasts : toastReducer
});
import { createStore, applyMiddleware, compose} from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger'
import rootReducer  from './reducers';
//import initialState  from './reducers/initial-state';

const initialState = {};

const store = createStore(
    rootReducer,  
    initialState,
    // compose(
    //     applyMiddleware(thunk)
    // )
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;

import AppConstants from '../constants/AppConstants.js';

const initialState = {
    posts: [],
};

export default function(state =  initialState, action) {
    switch (action.type) {
        case AppConstants.CMS_GET_POSTS:
            return {
                ...state, 
                posts: action.payload
            };
        case AppConstants.CMS_GET_CATEGORY_POSTS:
            return {
                ...state, 
                posts: action.payload
            };      
        default:
        return state;
    }
}
import AppConstants from '../constants/AppConstants.js';

const initialState = {
    categories : [],
};

export default function(state =  initialState, action) {
    switch (action.type) {
        case AppConstants.CMS_GET_CATEGORIES:
            return {
                ...state, 
                categories: action.payload
            };
        default:
        return state;
    }
}
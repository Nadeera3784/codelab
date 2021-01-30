import AppConstants from '../constants/AppConstants.js';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case AppConstants.CMS_AUTH_GET_ERRORS:
      return action.payload;
    case AppConstants.CMS_AUTH_CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
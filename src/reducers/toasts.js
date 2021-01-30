import AppConstants from '../constants/AppConstants.js';

const initialState = {
    toasts :  []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case(AppConstants.CMS_TOAST_ADD): {
      const toasts = [...state.toasts, action.payload];
      return {
        ...state,
        toasts,
      };
    }

    case(AppConstants.CMS_TOAST_REMOVE): {
      const toasts = [...state.toasts].filter((n) => n._id !== action.payload);
      return {
        ...state,
        toasts,
      };
    }

    default: {
      return state;
    }
  }
};
import store from '../store.js';
import AppConstants  from '../constants/AppConstants.js';

export async function add(type, content, duration = 3000) {
  return function (dispatch) {
        dispatch({
          type   : AppConstants.CMS_TOAST_ADD,
          payload : toast,
        });
        setTimeout(() => {
          dispatch({
            type : AppConstants.CMS_TOAST_REMOVE,
            payload : _id,
          });
        }, duration);
  };
}
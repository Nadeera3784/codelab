import axios from 'axios';
import jwt_decode from 'jwt-decode';
import store from '../store.js';
import { setCurrentUser, logoutUser} from '../actions/AuthActions.js';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const checkAuthorization = () => {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logoutUser());
      //store.dispatch(clearCurrentProfile());
      //window.location.href = '/login';
    }
  }
}

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);


export {
  setAuthToken,
  checkAuthorization,
  isEmpty
};
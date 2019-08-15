import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './types';
import axios from 'axios';

const apiURL = 'https://api.github.com/users';

export const fetchUsers = () => dispatch => {
  axios
    .get(apiURL)
    .then(dispatch(fetchUsersBegin()))
    .then(resp =>
      setTimeout(() => {
        dispatch(fetchUsersSuccess(resp.data));
      }, 1000)
    )
    .catch(err => dispatch(fetchUsersFailure()));
};
export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

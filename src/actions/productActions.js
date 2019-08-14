import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './types';
import axios from 'axios';

const apiURL = 'https://api.github.com/users';

export const fetchProducts = () => dispatch => {
  axios
    .get(apiURL)
    .then(dispatch(fetchProductsBegin()))
    .then(resp =>
      setTimeout(() => {
        dispatch(fetchProductsSuccess(resp.data));
      }, 1000)
    )
    .catch(err => dispatch(fetchProductsFailure()));
};
export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

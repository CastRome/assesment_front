import axios from 'axios';

import { POSTS_SUCCESS,
  POSTS_LOADING,
  POSTS_ERROR } from '../reducers/Posts.reducer';

// action creator
export const getPosts = () => (dispatch) => {
  dispatch({ type: POSTS_LOADING, payload: true });

  // axios.get("https://jsonplaceholder.typicode.com/todos/")
  axios.get('https://fakestoreapi.com/products?limit=16')

  // axios.get("https://rickandmortyapi.com/api/character")

    .then((res) => {
      dispatch({ type: POSTS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: POSTS_ERROR, payload: error });
    })
    .finally(() => {
      dispatch({ type: POSTS_LOADING, payload: false });
    });
};

const bar = 'bar';
export default bar;

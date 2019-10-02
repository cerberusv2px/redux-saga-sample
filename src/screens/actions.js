export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';

export const fetchPostSuccess = (payload) => ({
  type: FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostError = (error) => ({
  type: FETCH_POST_ERROR,
  error,
});

export const fetchPosts = () => ({
  type: FETCH_POST
});

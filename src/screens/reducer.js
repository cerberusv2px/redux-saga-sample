import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from './actions';

const INITIAL_STATE = {
  isLoading: false,
  response: {},
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_POST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
      };

    case FETCH_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};

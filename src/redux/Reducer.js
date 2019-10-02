import PostReducer from '../screens/reducer';
import {combineReducers} from 'redux';

const mainReducer = combineReducers({
  posts: PostReducer,
});

export default mainReducer;

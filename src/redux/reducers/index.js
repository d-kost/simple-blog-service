import { combineReducers } from 'redux';
import blogPosts from './blogPosts';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  blogPosts,
  currentUser
});

export default rootReducer;
import { combineReducers } from 'redux';
import blogPosts from './blogPosts';
import currentUser from './currentUser';
import users from './users';

const rootReducer = combineReducers({
  blogPosts,
  currentUser,
  users
});

export default rootReducer;
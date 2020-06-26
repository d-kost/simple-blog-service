import { combineReducers } from 'redux';
import blogPosts from './blogPosts';
import currentUser from './currentUser';
import users from './users';
import userFilter from './userFilter';

const rootReducer = combineReducers({
  blogPosts,
  currentUser,
  users,
  userFilter
});

export default rootReducer;
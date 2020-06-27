import { combineReducers } from 'redux';
import blogPosts from './blogPosts';
import currentUserNickname from './currentUserNickname';
import users from './users';
import userFilter from './userFilter';

const rootReducer = combineReducers({
  blogPosts,
  currentUserNickname,
  users,
  userFilter
});

export default rootReducer;
import { combineReducers } from 'redux';
import blogPosts from './blogPosts';
import currentUserNickname from './currentUserNickname';
import users from './users';

const rootReducer = combineReducers({
  blogPosts,
  currentUserNickname,
  users,
});

export default rootReducer;
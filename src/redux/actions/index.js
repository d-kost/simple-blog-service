import {
  ADD_BLOGPOST,
  SET_CURRENT_USER,
  SET_USER_FILTER
} from '../constants';

let blogPostId = 2;

export const addBlogPost = (text, author) => ({
  type: ADD_BLOGPOST,
  id: blogPostId++,
  author,
  text
})

export const setCurrentUser = nickname => ({
  type: SET_CURRENT_USER,
  nickname
})

export const setUserFilter = enteredUser => ({
  type: SET_USER_FILTER,
  enteredUser
})
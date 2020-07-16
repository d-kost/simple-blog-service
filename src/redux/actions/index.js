import {
  ADD_BLOGPOST,
  SET_CURRENT_USER,
  SET_USER_FILTER,
  SET_GUEST_USER,
  ADD_USER,
  UPDATE_USER
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

export const setGuestUser = () => ({
  type: SET_GUEST_USER
})

export const setUserFilter = enteredUser => ({
  type: SET_USER_FILTER,
  enteredUser
})

export const addUser = user => ({
  type: ADD_USER,
  nickname: user.nickname,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  posts: user.posts
})

export const updateUser = user => ({
  type: UPDATE_USER,
  nickname: user.nickname,
  firstName: user.firstName,
  lastName: user.lastName,
  picture: user.picture,
  posts: user.posts
})
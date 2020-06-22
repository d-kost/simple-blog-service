import initUsers from '../../js_modules/initUsers';
import { ADD_USER } from '../constants';

const users = (state = initUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        {
          nickname: action.nickname,
          firstName: action.firstName,
          lastName: action.lastName,
          picture: action.picture,
          posts: action.posts
        },
        ...state
      ];

    default:
      return state;
  }
}

export default users;
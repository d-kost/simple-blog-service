import { SET_CURRENT_USER } from '../constants';

const currentUser = (state = 'cat', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log(action.nickname);
      
      return action.nickname;
    default:
      return state;
  }
}

export default currentUser;
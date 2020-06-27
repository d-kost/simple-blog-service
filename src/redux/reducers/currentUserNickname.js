import { SET_CURRENT_USER } from '../constants';

const currentUserNickname = (state = 'cat', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.nickname;
    default:
      return state;
  }
}

export default currentUserNickname;
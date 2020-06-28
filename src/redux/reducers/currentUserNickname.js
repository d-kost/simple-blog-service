import { SET_CURRENT_USER, SET_GUEST_USER } from '../constants';
import { GUEST_USER } from '../../js_modules/initUsers';


const currentUserNickname = (state = 'cat', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.nickname;
    case SET_GUEST_USER:
      return GUEST_USER;
    default:
      return state;
  }
}

export default currentUserNickname;
import { SET_CURRENT_USER } from '../constants';

const currentUser = (state = 'cat', action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.newCurretUser;
    default:
      return state;
  }
}

export default currentUser;
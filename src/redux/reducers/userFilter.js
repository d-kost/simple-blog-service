import { SET_USER_FILTER } from '../constants';

const userFilter = (state = '', action) => {
  switch (action.type) {
    case SET_USER_FILTER:
      return action.enteredUser;
    default:
      return state;
  }
}

export default userFilter;
import { connect } from 'react-redux';
import RegistrationForm from '../components/registration/RegistrationForm';
import { addUser, setCurrentUser, updateUser } from '../redux/actions/index';

const getCurrentUser = (state) => {
  return state.users.find(user => user.nickname === state.currentUserNickname);
}

const mapStateToProps = (state, ownProps) => ({
  nicknames: state.users.map(user => user.nickname),
  isRegistration: ownProps.isRegistration,
  currentUser: ownProps.isRegistration ? null : getCurrentUser(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  send: user => {
    if (ownProps.isRegistration) {
      dispatch(addUser(user));
      dispatch(setCurrentUser(user.nickname));
    } else {
      dispatch(updateUser(user));
    }

  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
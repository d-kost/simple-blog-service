import { connect } from 'react-redux';
import ProfileChange from '../../components/modal/ProfileChange';
import { setUserFilter } from '../../redux/actions/index';

const filterUsers = (users, userFilter) => {
  const filter = userFilter.toLowerCase();

  return users.filter(user => (
    user.nickname.toLowerCase().includes(filter) ||
    user.firstName.toLowerCase().includes(filter) ||
    user.lastName.toLowerCase().includes(filter)
  ));
}

const mapStateToProps = (state, ownProps) => ({
  filteredUsers: filterUsers(state.users, state.userFilter),
  onLoginClick: ownProps.onLoginClick
});

const mapDispatchToProps = dispatch => ({
  setUserFilter: enteredUser => dispatch(setUserFilter(enteredUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChange);
import { connect } from 'react-redux';
import ProfileChange from '../../components/modal/ProfileChange';
import { setGuestUser } from '../../redux/actions/index';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  onLoginClick: ownProps.onLoginClick
});

const mapDispatchToProps = dispatch => ({
  setGuestUser: () => dispatch(setGuestUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChange);
import { connect } from 'react-redux';
import RegistrationForm from '../components/registration/RegistrationForm';
import { addUser } from '../redux/actions/index';

const mapStateToProps = (state, ownProps) => ({
  nicknames: state.users.map(user => user.nickname)  
});

const mapDispatchToProps = dispatch => ({
  send: user => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
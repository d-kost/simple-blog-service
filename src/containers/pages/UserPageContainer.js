import { connect } from 'react-redux';
import UserPage from '../../components/pages/UserPage';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(UserPage);
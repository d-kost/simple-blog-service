import { connect } from 'react-redux';
import '../sass/PageHeader.sass';
import PropTypes from 'prop-types';
import { GUEST_USER } from '../js_modules/initUsers';
import PageHeader from '../components/pageHeader/PageHeader';

const mapStateToProps = state => ({
  currentUserNickname: state.currentUserNickname,
  currentUserPicture: getCurrentUserPicture(state)
})

const getCurrentUserPicture = (state) => {
  if (state.currentUserNickname === GUEST_USER) {
    return '';
  }
  const currentUser = state.users.find(user => user.nickname === state.currentUserNickname);
  return currentUser.picture;
}

PageHeader.propTypes = {
  currentUserNickname: PropTypes.string,
  currentUserPicture: PropTypes.string
}

export default connect(mapStateToProps)(PageHeader);
import React from 'react';
import { connect } from 'react-redux';
import '../sass/UserProfile.sass';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {

  return (
    <div className='user-profile'>
      {console.log('profile render')}
      <img src={user.picture} alt={user.nickname} className='user-picture' />

      <div className='user-info'>
        <p className='user-info__fullname'>
          <span className='user-info__mark'>full name: </span>
          {user.firstName} {user.lastName}
        </p>

        <p className='user-info__nickname'>
          <span className='user-info__mark'>nickname: </span>
          {user.nickname}
        </p>
      </div>
    </div>

  )
}

UserProfile.propTypes = {
  nickname: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  picture: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.number),
}

const findUserByNickname = (users, nickname) => {
  return users.find(user => user.nickname === nickname) || 'cat';
}

const mapStateToProps = (state, ownProps) => ({
  user: findUserByNickname(state.users, ownProps.nickname)
})

export default connect(mapStateToProps)(UserProfile);
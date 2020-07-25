import React from 'react';
import PropTypes from 'prop-types';

const NicknameList = ({ users, onClickNickname }) => {

  return (
    <ul className='modal-users'>
      {users.map(user => (
        <li
          key={user.nickname}
          onClick={() => onClickNickname(user.nickname)}
          className='modal-users__user'
          tabIndex={1}
        >
          {user.nickname}&nbsp;
          <span className='modal-users__fullname'>
            {user.firstName} {user.lastName}
          </span>
        </li>
      ))}

    </ul>

  )
}

NicknameList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickname: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string
  })),
  
  onClickNickname: PropTypes.func
}

export default React.memo(NicknameList);
import React from 'react';
import PropTypes from 'prop-types';

const NicknameList = ({ users, onClickNickname }) => {

  return (
    <ul className='modal-users'>
      {users.map(user => (
        <li
          key={user.nickname}
          onClick={e => onClickNickname(e, user.nickname)}
          onKeyDown={e => onClickNickname(e, user.nickname)}
          className='modal-users__user'
          tabIndex={0}
        >
          <span className='modal-users__nickname'>
            {user.nickname}&nbsp;
          </span>
          {user.firstName} {user.lastName}
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
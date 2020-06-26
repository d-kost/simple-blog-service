import React from 'react';

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

export default React.memo(NicknameList);
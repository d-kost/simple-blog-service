import React from 'react';

const NicknameList = ({ nicknames, onClickNickname }) => {

  return (
    <ul className='nickname-list'>
      {nicknames.map(nickname => (
        <li onClick={() => onClickNickname(nickname)}>
          {nickname}
        </li>
      ))}

    </ul>

  )
}

export default NicknameList;
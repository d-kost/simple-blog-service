import React, { useState, useCallback, useRef, useEffect } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import NicknameList from './NicknameList';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { isClickOrKeyDown } from '../../js_modules/eventCommonFunctions';

const ProfileChange = ({ users, acceptModal, setGuestUser }) => {

  const [enteredUser, setEnteredUser] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [warning, setWarning] = useState(false);

  let history = useHistory();

  let isMounted = useRef();
  useEffect(() => {
    isMounted.current = true;

    return () => isMounted.current = false;
  }, [])

  const register = () => {
    setGuestUser();
    history.push('/registration');
  };

  const onInputChange = (event) => {
    setEnteredUser(event.target.value);
    setWarning(false);
    debouncedChange();
  }

  //filter users by entered value
  const debouncedFunctionRef = useRef()
  debouncedFunctionRef.current = () => filterUsers(enteredUser);

  const debouncedChange = useCallback(debounce(
    (...args) => debouncedFunctionRef.current(...args),
    1000,
  ), []);

  const filterUsers = (userFilter) => {
    const filter = userFilter.toLowerCase();

    const newFilteredUsers = users.filter(user => (
      user.nickname.toLowerCase().includes(filter) ||
      user.firstName.toLowerCase().includes(filter) ||
      user.lastName.toLowerCase().includes(filter)
    ));

    if (isMounted.current) {
      setFilteredUsers(newFilteredUsers);
    }
  }

  const onClickNickname = useCallback((event, nickname) => {
    if (enteredUser !== nickname && isClickOrKeyDown(event)) {
      setWarning(false);
      setEnteredUser(nickname);
    }

  }, [enteredUser])

  const onLoginClick = () => {
    if (!users.some(user => user.nickname === enteredUser)) {
      setWarning(true);
      return;
    }
    acceptModal(enteredUser);
  }

  return (
    <BrowserRouter>
      <div className='user-change'>

        <div className='authorization'>
          <div className='authorization__form'>
            <input className='authorization__input'
              type='text' value={enteredUser} onChange={onInputChange}
              placeholder='Enter name or nickname' />

            <button className='authorization__log-in modal-button'
              onClick={onLoginClick}
            >
              Log in
          </button>
          </div>

          <p className={warning ? 'modal-warning' : 'modal-warning modal-warning--hidden'}>
            User with nickname
            <span className='modal-warning__nickname'> "{enteredUser}" </span>
            does not exist
          </p>

          <NicknameList
            users={filteredUsers}
            onClickNickname={onClickNickname}
          />
        </div>

        <button className='user-change__register modal-button'
          onClick={register}
        >
          Create new account
        </button>

      </div>
    </BrowserRouter>
  )
}

ProfileChange.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    nickname: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string,
  })),

  acceptModal: PropTypes.func,
  setGuestUser: PropTypes.func
}

export default ProfileChange;
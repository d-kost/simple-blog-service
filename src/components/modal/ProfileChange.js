import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import NicknameList from './NicknameList';
import debounce from 'lodash/debounce';

const ProfileChange = ({ filteredUsers, onLoginClick, setUserFilter }) => {

  const [enteredUser, setEnteredUser] = useState('');
  // const [chosenUserNickname, setChosenUserNickname] = useState('');

  useEffect(() => {
    return () => {
      //clear filter on unmount
      setUserFilter('');
    };
  }, [setUserFilter]);

  let history = useHistory();

  const register = () => {
    history.push('/registration');
  };

  const onInputChange = (event) => {
    setEnteredUser(event.target.value);
    debouncedChange();
  }

  //filter users by entered value
  const debouncedFunctionRef = useRef()
  debouncedFunctionRef.current = () => setUserFilter(enteredUser);

  const debouncedChange = useCallback(debounce(
    (...args) => debouncedFunctionRef.current(...args),
    1000,
  ), []);

  const onClickNickname = useCallback((nickname) => {

    if (enteredUser !== nickname) {
      setEnteredUser(nickname);
      setUserFilter(nickname);
    }
    // setChosenUserNickname(nickname);
  }, [enteredUser, setUserFilter])

  return (
    <BrowserRouter>
      <div className='user-change'>

        <div className='authorization'>
          <div className='authorization__form'>
            <input className='authorization__input'
              type='text' value={enteredUser} onChange={onInputChange} />

            <button className='authorization__log-in'
              onClick={() => onLoginClick(enteredUser)}
            >
              Log in
          </button>
          </div>

          <NicknameList
            users={filteredUsers}
            onClickNickname={onClickNickname}
          />
        </div>

        <button className='user-change__register'
          onClick={register}
        >
          Create new account
        </button>


        {/* <Link to='/registration'>
          new
        <button onClick={closeModal}>Create new account</button>
        </Link> */}

        {/* <Switch>
          <Route path='/registration'>
            <RegistrationPage />
          </Route>
        </Switch> */}

      </div>
    </BrowserRouter>
  )
}

export default ProfileChange;
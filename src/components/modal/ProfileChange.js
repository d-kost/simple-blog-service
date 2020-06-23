import React, { useState, useCallback, useRef } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import NicknameList from './NicknameList';
import debounce from 'lodash/debounce';

const ProfileChange = ({ onAcceptClick }) => {

  const [enteredNickname, setEnteredNickname] = useState('');
  const [chosenUserNickname, setChosenUserNickname] = useState('');

  let history = useHistory();

  const registrate = () => {
    history.push('/registration');
  };

  const onInputChange = (event) => {
    setEnteredNickname(event.target.value);
    console.log('1');
    debouncedChange();
  }

  const debouncedFunctionRef = useRef()
  debouncedFunctionRef.current = () => seek();

  const debouncedChange = useCallback(debounce(
    (...args) => debouncedFunctionRef.current(...args),
    1000,
  ), []);

  const seek = () => {
    console.log('seek');
  }

  const onClickNickname = (nickname) => {
    setChosenUserNickname(nickname);
  }

  return (
    <BrowserRouter>
      <div className='user-change'>
        <input className='user-change__input'
          type='text' value={enteredNickname} onChange={onInputChange} />

        <NicknameList
          nicknames={[]}
          onClickNickname={onClickNickname}
        />


        <button className='user-change__button' onClick={registrate}>
          Create new account
        </button>
        <button className='user-change__button' onClick={() => onAcceptClick(enteredNickname)}>
          Accept
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
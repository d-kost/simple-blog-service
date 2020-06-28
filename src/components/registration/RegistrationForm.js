import React, { useState, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import keywords from'../../js_modules/keywords';

const RegistrationForm = ({ nicknames, send }) => {

  const [nickname, setNickname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [isTaken, setIsTaken] = useState(false);
  const [isKeyword, setIsKeyword] = useState(false);
  

  const sendNewInformation = (event) => {
    event.preventDefault();
    // if (!nickname.length || !firstName.length || !lastName.length) {
    //   return;
    // }

    send({
      nickname,
      firstName,
      lastName,
      picture: `https://api.adorable.io/avatars/285/${nickname}.png`,
      posts: []
    })
  }

  const enterNicknameHandler = (e) => {
    setNickname(e.target.value);
    setIsTaken(false);
    setIsKeyword(false);
    debouncedChange();
  }

  //check if nickname exists
  const debouncedFunctionRef = useRef()
  debouncedFunctionRef.current = () => checkNicknames();

  const debouncedChange = useCallback(debounce(
    (...args) => debouncedFunctionRef.current(...args),
    500,
  ), []);

  const checkNicknames = () => {
    if (nicknames.includes(nickname)) {
      setIsTaken(true);
      return;
    }

    if (keywords.includes(nickname)) {
      setIsKeyword(true);
    }
  }

  return (
    <div>

      <form onSubmit={sendNewInformation}>
        <label>
          Nickname 
          {isTaken && <span>Nickname is already taken</span>}
          {isKeyword && <span>Keyword cannot be a nickname</span>}
          <input type='text' value={nickname} minLength='3' required onChange={enterNicknameHandler} />
        </label>

        <label>
          First name
          <input type='text' value={firstName} minLength='1' required onChange={e => setFirstName(e.target.value)} />
        </label>

        <label>
          Last name
          <input type='text' value={lastName} minLength='1' required onChange={e => setLastName(e.target.value)} />
        </label>

        <button>Save</button>
      </form>

    </div>
  )
}

export default RegistrationForm;
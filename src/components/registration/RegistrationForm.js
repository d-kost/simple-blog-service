import React, { useState, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import keywords from '../../js_modules/keywords';
import '../../sass/UserForm.sass';
import TextInput from './TextInput';
import { useHistory } from 'react-router-dom';

const RegistrationForm = ({ nicknames, send }) => {

  const [nickname, setNickname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const [isTaken, setIsTaken] = useState(false);
  const [isKeyword, setIsKeyword] = useState(false);

  const profilePic = useRef(null);
  let history = useHistory();

  const sendNewInformation = (event) => {
    event.preventDefault();
    // if (!nickname.length || !firstName.length || !lastName.length) {
    //   return;
    // }
    if (isTaken || isKeyword) {
      return;
    }

    send({
      nickname,
      firstName,
      lastName,
      picture: profilePicture || `https://api.adorable.io/avatars/285/${nickname}.png`,
      posts: []
    })

    const userPagePath = `/${nickname}`;
    history.push(userPagePath);
  }

  const enterNicknameHandler = (value) => {
    // setNickname(e.target.value);
    setNickname(value);
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

  const profilePictureHandleChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  }

  const removeProfilePicture = (e) => {
    e.preventDefault();

    profilePic.current.value = '';
    setProfilePicture('');
  }

  const uploadPictureHandler = (e) => {
    e.preventDefault();
    profilePic.current.click();
  }

  return (
    <form onSubmit={sendNewInformation} className='user-form user'>
      <div className='user-form__main-info'>

        <div className='user-form__picture-manager'>
          {profilePicture.length ?
            <img src={profilePicture} alt='preview' className='user-picture' />
            :
            <div className='user-form__image-holder'>No image</div>
          }

          <input
            name="pictureFile"
            type="file"
            ref={profilePic}
            onChange={profilePictureHandleChange}
            className='user-form__picture-input'
          />
          <button
            type="button"
            onClick={uploadPictureHandler}
            className='user-form__pic-button user-form__button'
          >
            Upload image
          </button>
          <button
            type="button"
            onClick={removeProfilePicture}
            className='user-form__pic-button user-form__button'
          >
            Remove image
          </button>
        </div>

        <div className='user-form__data'>
          <TextInput
            label='Nickname'
            minLength={3}
            onChange={enterNicknameHandler}
          />

          <div className='user-form__warning'>
            {isTaken && <span>Nickname is already taken</span>}
            {isKeyword && <span>Keyword cannot be a nickname</span>}
          </div>

          <TextInput
            label='First name'
            minLength={1}
            onChange={setFirstName}
          />

          <TextInput
            label='Last name'
            minLength={1}
            onChange={setLastName}
          />

        </div>

      </div>
      <button className='user-form__submit user-form__button'>Save</button>

    </form>
  )
}

export default RegistrationForm;
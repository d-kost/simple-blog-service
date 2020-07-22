import React, { useState, useRef, useCallback } from 'react';
import debounce from 'lodash/debounce';
import keywords from '../../js_modules/keywords';
import '../../sass/UserForm.sass';
import TextInput from './TextInput';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserForm = ({ nicknames, isRegistration, currentUser, send }) => {

  const [nickname, setNickname] = useState(
    currentUser ? currentUser.nickname : '');
  const [firstName, setFirstName] = useState(
    currentUser ? currentUser.firstName : '');
  const [lastName, setLastName] = useState(
    currentUser ? currentUser.lastName : '');
  const [profilePicture, setProfilePicture] = useState(
    currentUser ? currentUser.picture : '');

  const [isTaken, setIsTaken] = useState(false);
  const [isKeyword, setIsKeyword] = useState(false);

  const profilePicRef = useRef(null);
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

    profilePicRef.current.value = '';
    setProfilePicture('');
  }

  const uploadPictureHandler = (e) => {
    e.preventDefault();
    profilePicRef.current.click();
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
            ref={profilePicRef}
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
          {isRegistration && <TextInput
            label='Nickname'
            minLength={3}
            value={nickname}
            onChange={enterNicknameHandler}
            testid={'nickname'}
          />}

          <div className='user-form__warning'>
            {isTaken && <span>Nickname is already taken</span>}
            {isKeyword && <span>Keyword cannot be a nickname</span>}
          </div>

          <TextInput
            label='First name'
            minLength={1}
            value={firstName}
            onChange={setFirstName}
            testid={'firstName'}
          />

          <TextInput
            label='Last name'
            minLength={1}
            value={lastName}
            onChange={setLastName}
            testid={'lastName'}
          />

        </div>

      </div>
      <button className='user-form__submit user-form__button'>Save</button>

    </form>
  )
}

UserForm.propTypes = {
  nicknames: PropTypes.arrayOf(PropTypes.string),
  isRegistration: PropTypes.bool,
  currentUser: PropTypes.shape({
    nickname: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    picture: PropTypes.string
  }),
  send: PropTypes.func
}

export default UserForm;
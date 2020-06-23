import React, { useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

const ProfileChange = ({ onAcceptClick }) => {

  // let { path, url } = useRouteMatch();
  const [nickname, setNickname] = useState('');

  let history = useHistory();

  let registrate = () => {
    // console.log(path, url);
    history.push('/registration');
  };

  const onInputChange = (event) => {
    setNickname(event.target.value);
  }

  return (
    <BrowserRouter>
      <div>
        <input type='text' value={nickname} onChange={onInputChange} />

        <button onClick={registrate}>Create new account</button>
        <button onClick={() => onAcceptClick(nickname)}>Accept</button>
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
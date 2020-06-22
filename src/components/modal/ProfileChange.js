import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

const ProfileChange = () => {

  // let { path, url } = useRouteMatch();

  let history = useHistory();

  let registrate = () => {
    // console.log(path, url);
    history.push('/registration');
  };

  return (
    <BrowserRouter>
      <div>
        <input type='text' />

        <button onClick={registrate}>Create new account</button>
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
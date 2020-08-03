import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import RegistrationPage from './components/pages/RegistrationPage';
import EditProfilePage from './components/pages/EditProfilePage';
import UserPageContainer from './containers/pages/UserPageContainer';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/registration'>
          <RegistrationPage />
        </Route>
        <Route path='/:nickname/editProfile'>
          <EditProfilePage />
        </Route>
        <Route path='/:nickname'>
          <UserPageContainer />
        </Route>
        
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

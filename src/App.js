import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import RegistrationPage from './components/pages/RegistrationPage';
import UserPage from './components/pages/UserPage';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/registration'>
          <RegistrationPage />
        </Route>
        <Route path='/:nickname'>
          <UserPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

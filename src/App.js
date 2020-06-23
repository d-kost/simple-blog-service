import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import RegistrationPage from './components/RegistrationPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/registration'>
          <RegistrationPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

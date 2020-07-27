import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GUEST_USER } from '../../js_modules/initUsers';
import { createStore } from 'redux';
import rootReducer from "../../redux/reducers/index";

import PageHeaderContainer from '../../containers/PageHeaderContainer';

// automatically afterEach(cleanup);

describe('render PageHeader', () => {

  it('show header details by menu button click', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PageHeaderContainer />
        </Provider>
      </BrowserRouter>);

    expect(screen.queryByTestId('login-button')).toBeNull();
    expect(screen.queryByTestId('header-details')).toBeNull();
    expect(screen.queryByTestId('menu-button').textContent).not.toBeNull();

    fireEvent.click(screen.queryByTestId('menu-button'), { button: 1 });

    expect(screen.queryByTestId('header-details')).not.toBeNull();

    //close details when click on the document
    fireEvent.click(document, { button: 1 });
    expect(screen.queryByTestId('header-details')).toBeNull();

  });

  it('no current user: show modal window, do not show details', () => {

    const customStore = createStore(rootReducer, {
      currentUserNickname: GUEST_USER
    });
    
    render(
      <BrowserRouter>
        <Provider store={customStore}>
          <PageHeaderContainer />
        </Provider>
      </BrowserRouter>, {
      store
    });

    expect(screen.queryByTestId('login-button').textContent).toBe('Log in');
    expect(screen.queryByTestId('header-details')).toBeNull();
    expect(screen.queryByTestId('menu-button')).toBeNull();

    fireEvent.click(screen.queryByTestId('login-button'), { button: 1 });

    expect(screen.queryByRole('dialog', { modal: true })).not.toBeNull();

  });
});
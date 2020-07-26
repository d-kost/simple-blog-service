import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PageHeaderDetails from '../../components/pageHeader/PageHeaderDetails';

describe('render PageHeaderDetails', () => {

  it('menu items click and key down events', () => {
    const changeProfile = jest.fn();
    const closeDetails = jest.fn();
    const logOut = jest.fn();

    render(
      <BrowserRouter>
        <PageHeaderDetails
          currentUserNickname='test'
          changeProfileHandleClick={changeProfile}
          closeDetails={closeDetails}
          logOutHandleClick={logOut}
        />
      </BrowserRouter>);

    expect(screen.queryByText('my profile')).not.toBeNull();
    expect(screen.queryByText('edit profile')).not.toBeNull();

    checkEvents('change account', changeProfile);
    checkEvents('log out', logOut);

  });
});

const checkEvents = (text, func) => {
  const element = screen.queryByText(text);

  expect(element).not.toBeNull();

  fireEvent.click(element, { button: 1 });
  fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' });

  expect(func).toHaveBeenCalled();
  expect(func).toHaveBeenCalledTimes(2);
}
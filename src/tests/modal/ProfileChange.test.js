import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'

import ProfileChange from '../../components/modal/ProfileChange';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('render ProfileChange', () => {

  it('do not call login if user does not exist', () => {
    const login = jest.fn();
    const setGuestUser = jest.fn();

    act(() => {
      render(
        <ProfileChange
          users={[]}
          acceptModal={login}
          setGuestUser={setGuestUser}
        />, container);
    });

    const loginBtn = container.querySelector('.authorization__log-in');

    fireEvent.click(loginBtn, { button: 1 });

    expect(login).not.toHaveBeenCalled();

  });

  it('call login if entered user exists', () => {
    const login = jest.fn();
    const setGuestUser = jest.fn();
    const users = [{
      nickname: 'user1',
      firstName: 'Name',
      lastName: 'LastName',
      picture: '',
    }];

    act(() => {
      render(
        <ProfileChange
          users={users}
          acceptModal={login}
          setGuestUser={setGuestUser}
        />, container);
    });

    const loginBtn = container.querySelector('.authorization__log-in');
    const input = container.querySelector('.authorization__input');

    fireEvent.change(input,  { target: { value: 'user1' } });
    fireEvent.click(loginBtn, { button: 1 });

    expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenCalledWith('user1');

  });
})

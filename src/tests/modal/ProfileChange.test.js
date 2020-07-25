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

  it('login button', () => {
    const login = jest.fn();
    const setUserFilter = jest.fn();
    const setGuestUser = jest.fn();

    act(() => {
      render(
        <ProfileChange
          filteredUsers={[]}
          onLoginClick={login}
          setUserFilter={setUserFilter}
          setGuestUser={setGuestUser}
        />, container);
    });

    const loginBtn = container.querySelector('.authorization__log-in');
    act(() => {
      fireEvent.click(loginBtn, { button: 1 });
    });
    expect(login).toHaveBeenCalled();
    expect(login).toHaveBeenCalledTimes(1);

  });
})

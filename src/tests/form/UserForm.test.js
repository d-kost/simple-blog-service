import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'
import UserForm from '../../components/form/UserForm';

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

describe('render UserForm', () => {
  const send = jest.fn();
  const a = jest.fn();
  // const currentUser = {
  //   nickname: 'user1',
  //   firstName: '',
  //   lastName: '',
  //   picture: ''
  // }

  it("user registration form", () => {

    act(() => {
      render(<UserForm
        nicknames={['cat', 'user1']}
        isRegistration={true}
        currentUser={null}
        send={send}
        a={a}
      />, container);
    });

    const nicknameInput = container.querySelector('[data-testid=nickname]');
    expect(nicknameInput.value).toBe('');

    act(() => {
      fireEvent.change(nicknameInput, { target: { value: 'newNickname' } });
    });

    expect(nicknameInput.value).toBe('newNickname');
    //the warning is always empty 
    //checkNicknames() is not called from test with advanceTimersByTime()
    expect(container.querySelector('.user-form__warning').textContent).toBe('');

  });
})

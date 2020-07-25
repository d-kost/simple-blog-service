import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react';
import UserForm from '../../components/form/UserForm';
import { BrowserRouter } from 'react-router-dom';

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

  it("user registration form", () => {
    const send = jest.fn();

    act(() => {
      render(
        <BrowserRouter>
          <UserForm
            nicknames={['cat', 'user1']}
            isRegistration={true}
            currentUser={null}
            send={send}
          />
        </BrowserRouter>, container);
    });

    //enter new nickname
    const nicknameInput = container.querySelector('[data-testid=nickname]');
    expect(nicknameInput.value).toBe('');

    act(() => {
      fireEvent.change(nicknameInput, { target: { value: 'newNickname' } });
    });

    expect(nicknameInput.value).toBe('newNickname');

    //the warning is always empty 
    //checkNicknames() is not called from test with advanceTimersByTime()
    expect(container.querySelector('.user-form__warning').textContent).toBe('');

    //submit form
    act(() => {
      fireEvent.click(container.querySelector('.user-form__submit'), { button: 1 })
    });
    expect(send).not.toHaveBeenCalled();

    const firstNameInput = container.querySelector('[data-testid=firstName]');
    const lastNameInput = container.querySelector('[data-testid=lastName]');

    enterValueToInput(firstNameInput, lastNameInput, send);

  });

  it("user edit form", () => {
    const send = jest.fn();

    const currentUser = {
      nickname: 'user1',
      firstName: 'UserName',
      lastName: 'UserLastName',
      picture: ''
    }

    act(() => {
      render(
        <BrowserRouter>
          <UserForm
            nicknames={['cat', 'user1']}
            isRegistration={false}
            currentUser={currentUser}
            send={send}
          />
        </BrowserRouter>, container);
    });

    const nicknameInput = container.querySelector('[data-testid=nickname]');
    const firstNameInput = container.querySelector('[data-testid=firstName]');
    const lastNameInput = container.querySelector('[data-testid=lastName]');

    expect(nicknameInput).toBeNull();
    expect(firstNameInput.value).toBe(currentUser.firstName);
    expect(lastNameInput.value).toBe(currentUser.lastName);

    enterValueToInput(firstNameInput, lastNameInput, send);

  });
})

const enterValueToInput = (firstNameInput, lastNameInput, send) => {
  //enter new first and last name
  act(() => {
    fireEvent.change(firstNameInput, { target: { value: 'FirstName' } });
    fireEvent.change(lastNameInput, { target: { value: 'LastName' } });
  });

  //submit form
  act(() => {
    fireEvent.click(container.querySelector('.user-form__submit'), { button: 1 });
  });
  expect(send).toHaveBeenCalledTimes(1);
}

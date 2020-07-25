import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react';

import NicknameList from '../../components/modal/NicknameList';

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

describe('render NicknameList', () => {

  it('login button', () => {
    const onClickNickname = jest.fn();
    const users = [
      {
        nickname: 'user1',
        firstName: 'UserName',
        lastName: 'UserLastName',
        picture: ''
      },
      {
        nickname: 'cat',
        firstName: 'CatName',
        lastName: 'CatLastName',
        picture: ''
      }
    ]

    act(() => {
      render(
        <NicknameList
          users={users}
          onClickNickname={onClickNickname}
        />, container);
    });

    const listItems = container.querySelectorAll('.modal-users__user');
    expect(listItems.length).toBe(2);

    act(() => {
      fireEvent.click(listItems[0], { button: 1 });
    });
    expect(onClickNickname).toHaveBeenCalled();
    expect(onClickNickname).toHaveBeenCalledWith(users[0].nickname);

  });
})

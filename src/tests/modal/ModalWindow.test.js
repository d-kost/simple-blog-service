import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'

import ModalWindow from '../../components/modal/ModalWindow';

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

describe('render ModalWindow', () => {

  it('modal content and close function', () => {
    const cancel = jest.fn();
    const modalContent = 'Modal content';
    act(() => {
      render(
        <ModalWindow onCancelClick={cancel}>
          {modalContent}
        </ModalWindow>, container);
    });

    const closeBnt = container.querySelector('.modal-window__close-button');
    act(() => {
      fireEvent.click(closeBnt, { button: 1 });
    });
    expect(cancel).toHaveBeenCalled();
    expect(cancel).toHaveBeenCalledTimes(1);

    expect(container.querySelector('.modal-window').innerHTML).toMatch(new RegExp(modalContent));

  });
})

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TextInput from '../../components/form/TextInput';

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

describe('render text input', () => {
  it("render props", () => {
    const onChange = jest.fn();

    act(() => {
      render(<TextInput
        label='Name'
        minLength={1}
        value=''
        onChange={onChange}
      />, container);
    });

    expect(container.querySelector('.user-form__label').textContent).toBe('Name');
    expect(container.querySelector('.user-form__text-input').value).toBe('');
    
  });
})

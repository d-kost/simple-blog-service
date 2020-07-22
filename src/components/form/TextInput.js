import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, minLength, value, onChange, testid }) => {

  return (
    <label className='user-form__label'>
      {label}
      <input
        type='text'
        value={value}
        minLength={minLength}
        required
        onChange={e => onChange(e.target.value)}
        className='user-form__text-input'
        data-testid={testid}
      />
    </label>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  minLength: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
  testid: PropTypes.string
}

export default React.memo(TextInput);
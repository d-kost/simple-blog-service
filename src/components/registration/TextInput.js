import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ label, minLength, onChange }) => {
  return (
    <label className='user-form__label'>
      {label}
      <input
        type='text'
        minLength={minLength}
        required
        onChange={e => onChange(e.target.value)}
        className='user-form__text-input'
      />
    </label>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  minLength: PropTypes.number,
  onChange: PropTypes.func
}

export default React.memo(TextInput);
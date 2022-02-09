import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <label htmlFor={id}>
      <span>{label}*</span>
      <input
        className="mr-3 ml-3 h-8 border-2 border-transparent rounded outline-none focus:border-2 focus:border-sand-200"
        id={id}
        {...props}
      />
    </label>
  );
};

export default Input;

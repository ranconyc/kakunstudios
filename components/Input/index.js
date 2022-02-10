import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}*</label>
      <input
        className="mr-3 ml-3 h-8 border-2 border-transparent rounded outline-none focus:border-2 focus:border-sand-200"
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;

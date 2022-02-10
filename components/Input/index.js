import React from 'react';

const Input = ({ id, label, icon, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}*</label>
      <div className="flex align-center mt-2 mb-2 h-8 w-full md:w-1/2 border-2 border-sand-200 rounded outline-none focus:border-2 focus:border-orange-400">
        {icon && icon}
        <input id={id} {...props} className="w-full outline-none" />
      </div>
    </div>
  );
};

export default Input;

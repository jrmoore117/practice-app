import React from 'react';

export const TextInput = ({
   name,
   value,
   onChange,
   placeholder 
}) => (
   <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
   />
);
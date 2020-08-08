import React from 'react';

export const Radio = ({
   name,
   value,
   onChange,
}) => (
   <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
   />
);
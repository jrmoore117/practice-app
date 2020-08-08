import React from 'react';

export const Checkbox = ({
   name,
   value,
   checked,
   onChange,
}) => (
   <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
   />
);
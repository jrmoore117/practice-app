import React from 'react';

export const Form = ({
   onSubmit,
   children
}) => (
   <form onSubmit={onSubmit}>
      {children}
   </form>
);
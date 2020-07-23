import React from 'react';

export const Col = ({ columns, children }) => (
   <div
      style={{
         gridColumn: `span ${columns || 1}`
      }}
   >
      {children}
   </div>
)
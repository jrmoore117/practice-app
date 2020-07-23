import React from 'react';

export const Col = ({ columns, color, children }) => (
   <div
      style={{
         gridColumn: `span ${columns || 1}`,
         backgroundColor: `${color || ''}`
      }}
   >
      {children}
   </div>
)
import React from 'react';

export const Row = ({ columns, spacing, children }) => (
   <div
      style={{
         display: 'grid',
         gridTemplateColumns: `${columns || 'repeat(12, 1fr)'}`,
         gridGap: `${spacing || '0'}`
      }}
   >
      {children}
   </div>
)
import React from 'react';

export const Flex = ({ align, justify, children }) => (
   <div style={{display: 'flex', justifyContent: justify, alignItems: align}}>
      {children}
   </div>
)
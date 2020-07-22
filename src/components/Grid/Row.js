import React from 'react';
import './grid.css';

export const Row = ({ id, className, children }) => (
   <div
      id={id}
      className={className || "row"}
   >
      {children}
   </div>
)
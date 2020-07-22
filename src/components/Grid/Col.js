import React from 'react';

export const Col = ({ span }) => (
   <div style={{
      gridColumn: `span ${span}`
   }}></div>
)
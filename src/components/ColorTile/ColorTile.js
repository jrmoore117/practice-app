import React from 'react';
import './colorTile.css';

export const ColorTile = ({ size, color }) => (
   <div 
      className="colorTile"   
      style={{
         width: `${size || '50px'}`,
         height: `${size || '50px'}`,
         backgroundColor: `${color || '#A6E0DE'}`
      }}
   />
)
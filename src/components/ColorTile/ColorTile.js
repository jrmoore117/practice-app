import React from 'react';
import './colorTile.css';

export const ColorTile = ({ size, color }) => (
   <div 
      className="colorTile"   
      style={{
         margin: '10px 100px 10px 0',
         width: `${size || '50px'}`,
         height: `${size || '50px'}`,
         color: '#FAF8F0',
         backgroundColor: `${color || '#A6E0DE'}`,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
      }}
   >
      {color}
   </div>
)
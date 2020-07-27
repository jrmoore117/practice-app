import React from 'react';
import './colorTile.css';

export const ColorTile = ({ size, color }) => (
   <div 
      className="colorTile"   
      style={{
         margin: '10px 10px 10px 0',
         width: `${size || '50px'}`,
         height: `${size || '50px'}`,
         color: '#FFFFFF',
         backgroundColor: `${color || '#FFFFFF'}`,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
      }}
   >
      {color}
   </div>
)
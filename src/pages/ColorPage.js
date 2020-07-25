import React from 'react';
import { ColorTile } from '../components';

export const ColorPage = () => (
   <div style={{ display: 'flex' }}>
      <div>
         <ColorTile color="#A6E0DE" size="100px" />
         <ColorTile color="#F4D2D2" size="100px" />
         <ColorTile color="#F49FB6" size="100px" />
      </div>
      <div>
         <ColorTile color="#85C4CB" size="100px" />
         <ColorTile color="#5068A8" size="100px" />
         <ColorTile color="#E74632" size="100px" />
         <ColorTile color="#F88C99" size="100px" />
         <ColorTile color="#FFB923" size="100px" />
      </div>
   </div>
)
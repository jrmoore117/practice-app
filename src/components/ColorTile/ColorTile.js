/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export const ColorTile = ({ size, color }) => (
   <div 
      css={css`
         margin: 10px 10px 10px 0;
         width: ${size || '50px'};
         height: ${size || '50px'};
         color: #FFFFFF;
         background-color: ${color || '#FFFFFF'};
         display: flex;
         justify-content: center;
         align-items: center;
         border-radius: 8px;
      `}
   >
      {color}
   </div>
)
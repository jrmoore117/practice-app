/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export const ColorTile = ({ size, color, border }) => (
   <div 
      css={css`
         margin: 10px 10px 10px 0;
         width: ${size || '50px'};
         height: ${size || '50px'};
         color: #FFFFFF;
         background-color: ${color || '#FFFFFF'};
         border: ${border};
         border-radius: 8px;
         display: flex;
         align-items: center;
         justify-content: center;
      `}
   >
      {color}
   </div>
);
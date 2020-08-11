/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const primary = css`
   min-height: 40px;
   min-width: 82px;
   padding: 0 16px;
   font-size: 15px;
   font-weight: 300;
   letter-spacing: 1px;
   box-shadow: 0 1px 2px 0 rgba(84, 148, 211, 0.75);
   background: linear-gradient(0deg, rgba(54, 90, 242, 1) 0%, rgba(84, 148, 211, 1) 100%);
   transition: all 200ms;
   border-radius: 8px;
   outline: none;
   cursor: pointer;
   color: rgba(255, 255, 255, 1);
   border: 1px solid rgba(54, 90, 242, 1);
   &:hover {
      border: 1px solid rgba(67, 103, 255, 1);
      box-shadow: 0 1px 5px 0 rgba(84, 148, 211, 1);
      background: linear-gradient(0deg, rgba(67, 103, 255, 1) 0%, rgba(97, 161, 224, 1) 100%);
   }
   &:active {
      border: 1px solid rgba(41, 77, 229, 1);
      box-shadow: none;
      background: linear-gradient(0deg, rgba(41, 77, 229, 1) 0%, rgba(71, 135, 198, 1) 100%);
   }
`

const secondary = css`
   min-height: 40px;
   min-width: 82px;
   padding: 0 16px;
   font-size: 15px;
   font-weight: 300;
   letter-spacing: 1px;
   box-shadow: 0 1px 2px 0 rgba(255, 48, 64, 0.75);
   background: linear-gradient(0deg, rgba(219, 29, 52, 1) 0%, rgba(255, 48, 64, 1) 100%);
   transition: all 200ms;
   border-radius: 8px;
   outline: none;
   cursor: pointer;
   color: rgba(255, 255, 255, 1);
   border: 1px solid rgba(219,29,52,1);
   &:hover {
      border: 1px solid rgba(232, 42, 65, 1);
      box-shadow: 0 1px 5px 0 rgba(255, 48, 64, 0.75);
      background: linear-gradient(0deg, rgba(232, 42, 65, 1) 0%, rgba(255, 61, 77, 1) 100%);
   }
   &:active {
      border: 1px solid rgba(206, 16, 39, 1);
      box-shadow: none;
      background: linear-gradient(0deg, rgba(206, 16, 39, 1) 0%, rgba(242, 35, 51, 1) 100%);
   }
`

export const Button = ({ type, onClick, children }) => (
   <button
      onClick={onClick}
      css={type === 'secondary' ? secondary : primary}
   >
      {children}
   </button>
);
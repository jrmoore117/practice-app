/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export const Navbar = () => (
   <div css={css`
   height: 70px;
   width: 100vw;
   display: flex;
   align-items: center;
   font-size: 35px;
   font-weight: 600;
   box-shadow: 0 2px 2px 0 rgb(240, 240, 240);
 `}>
      <img style={{ height: '45px', margin: '0 0 0 20px' }} src="/assets/images/bobber-5.svg" alt="logo" />
      <span>tackle</span>
   </div>
)
/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Navbar } from '../components';

export const HomePage = () => {
   return (
      <div css={css`min-height: 200vh;`}>
         <Navbar />
         <div css={css`
            min-height: 100vh;
            min-width: 100vw;
            background-image: url("/assets/images/landing-text.svg");
            background-size: cover;
            background-position: center;`}
         />
      </div>
   );
}
/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Counter, RandomJoke, ExampleForm } from '../components';

export const HomePage = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]);
   return (
      <div css={css`min-height: 200vh;`}>
         <div css={css`
        min-height: 100vh;
        min-width: 100vw;
        background-image: url("/assets/images/landing-text.svg");
        background-size: cover;
        background-position: center;`}
         >
         </div>
         <Counter count={count} setCount={setCount}/>
         <RandomJoke />
         <ExampleForm />
      </div>
   );
}
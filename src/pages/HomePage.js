/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Counter, RandomJoke } from '../components';

const bold = css`font-weight: 700;`;

export const HomePage = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]);
   return (
      <div>
         <Counter count={count} setCount={setCount}/>
         <RandomJoke />
      </div>
   );
}
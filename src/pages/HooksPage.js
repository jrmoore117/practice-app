/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Counter, RandomJoke, ExampleForm } from '../components';

export const HooksPage = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]);
   return (
      <div>
         <Counter count={count} setCount={setCount} />
         <RandomJoke />
         <ExampleForm />
      </div>
   );
}
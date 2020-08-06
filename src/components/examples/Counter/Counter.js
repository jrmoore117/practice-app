/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const bold = css`font-weight: 700;`;

export const Counter = ({count, setCount}) => (
   <div>
      <h2>Hooks</h2>
      <h4>useState: Counter</h4>
      <p><span css={bold}>Count:</span> {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
   </div>
)
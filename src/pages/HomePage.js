/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';

const bold = css`font-weight: 700;`;

export const HomePage = () => {
   const [count, setCount] = useState(0);
   const [time, setTime] = useState(new Date());
   useEffect(() => {
      document.title = `Count: ${count}`;
      const timer = setTimeout(setTime(new Date()), 1000);
      return () => clearTimeout(timer);
   }, [count]);
   return (
      <div>
         <div>
            <h2>Hooks</h2>
            <h4>useState: Counter</h4>
            <p><span css={bold}>Count:</span> {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h4>useEffect: Timer</h4>
            <p><span css={bold}>Time:</span> {time.toLocaleTimeString()}</p>
         </div>
      </div>
   );
}


{/* <ul>
   {['GraphQL', 'Testing', 'Webpack', 'Basics of Python, Go, or Java', 'Context API', 'Common Hooks', 'Web Protocols, Cookies, etc.', 'Web Server Optimization', 'Caching', 'Angular'].map(item => (
      <li key={Math.random()}>{item}</li>
   ))}
</ul> */}
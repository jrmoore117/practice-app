import React from 'react';

export const HomePage = () => (
   <div>
      <ul>
         {['GraphQL', 'Testing', 'Webpack', 'Basics of Python, Go, or Java', 'Context API', 'Common Hooks', 'Web Protocols, Cookies, etc.', 'Web Server Optimization', 'Caching', 'Angular'].map(item => (
            <li key={Math.random()}>{item}</li>
         ))}
      </ul>
   </div>
)
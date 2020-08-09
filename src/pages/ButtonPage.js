import React from 'react';
import { Button } from '../components';

export const ButtonPage = () => (
   <div>
      <Button onClick={() => console.log('Button!')}>Save changes</Button>
      <Button type="secondary" onClick={() => console.log('Button!')}>Save changes</Button>
   </div>
)
import React from 'react';
import { Box, Button } from '../components';

export const ButtonPage = () => (
   <div className="m-10">
      <Button onClick={() => console.log('Button!')} variant="primary">Defaut Button</Button>
      <Box color={['white', 'red.5', 'blue.5', 'white']} bg="red.5">BOX</Box>
      <Box color="white" bg="blue.5" cursor="pointer">BOX</Box>
      <Box color="white" bg="purple.5">BOX</Box>
   </div>
)
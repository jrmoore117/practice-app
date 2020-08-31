import React from 'react';
import { Box, Button } from '../components';

export const ButtonPage = () => (
   <div>
      <Button onClick={() => console.log('Button!')} shade="blue" mt={5}>Click me</Button>
      <Box color={['white', 'red.5', 'blue.5']} bg="red.5">BOX</Box>
      <Box color="white" bg="blue.5" cursor="pointer">BOX</Box>
      <Box color="white" bg="purple.5">BOX</Box>
   </div>
)
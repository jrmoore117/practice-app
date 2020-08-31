import React from 'react';
import { Box } from '../Box/Box';

export const Flex = ({ children, ...props }) => (
   <Box display="flex" {...props}>
      {children}
   </Box>
);
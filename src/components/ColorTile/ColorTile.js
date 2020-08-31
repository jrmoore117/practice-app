import React from 'react';
import { Flex } from '../Flex/Flex';

export const ColorTile = ({ size, color, border }) => (
   <Flex
      // Space
      m="10px 10px 10px 0"
      // Color
      color="#FFFFFF"
      bg={color || '#FFFFFF'}
      // Layout
      width={size || '50px'}
      height={size || '50px'}
      // Border
      border={border}
      borderRadius="8px"
      // Flexbox
      alignItems="center"
      justifyContent="center"
   >
      {color}
   </Flex>
);
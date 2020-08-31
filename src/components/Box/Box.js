import React from 'react';
import styled from '@emotion/styled'

import { 
   space,
   color,
   typography,
   layout,
   flexbox,
   grid,
   background,
   border,
   position,
   shadow
} from 'styled-system';

export const Box = styled.div`
   ${space}
   ${color}
   ${typography}
   ${layout}
   ${flexbox}
   ${grid}
   ${background}
   ${border}
   ${position}
   ${shadow}
   cursor: ${props => props.cursor || null};
   transition: ${props => props.transition || null};
`
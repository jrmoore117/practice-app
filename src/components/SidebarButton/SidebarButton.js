/* @jsx jsx */
import React from 'react';
import { Link } from '@reach/router';
import { css, jsx } from '@emotion/core';

const sidebarButtonStyles = css`
   padding: 10px 0 0 20px;
   transition: all 200ms;
   font-size: 14px;
   &:hover {
      padding: 10px 0 0 25px;
   }
`;

const linkStyles = css`
   text-decoration: none;
   color: rgb(35, 35, 35);
`;

export function SidebarButton({ linkTo, buttonText }) {
   return (
      <div css={sidebarButtonStyles}>
         <Link to={linkTo} css={linkStyles}>
            {buttonText}
         </Link>
      </div>
   );
}
/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

export function SidebarTitle({ title }) {
   return (
      <div css={css`
         width: 100%;
         padding: 20px 10px 0 20px;
         font-size: 17px;
      `}>
         {title}
      </div>
   );
}
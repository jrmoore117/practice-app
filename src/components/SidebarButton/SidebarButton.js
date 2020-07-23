import React from 'react';
import { Link } from '@reach/router';

export function SidebarButton({ linkTo, buttonText }) {
   return (
      <Link to={linkTo}>
         <div className="sidebar-button">
            {buttonText}
         </div>
      </Link>
   );
}
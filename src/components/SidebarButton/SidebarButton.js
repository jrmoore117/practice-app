import React from 'react';
import { Link } from '@reach/router';
import './sidebarButton.css';

export function SidebarButton({ linkTo, buttonText }) {
   return (
      <div className="sidebar-button">
         <Link to={linkTo}>
            {buttonText}
         </Link>
      </div>
   );
}
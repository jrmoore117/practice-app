import React from 'react';
import './sidebarTitle.css';

export function SidebarTitle({ title }) {
   return (
      <div className="sidebar-title">
         {title}
      </div>
   );
}
import React from 'react';
import { Row, Col, SidebarButton, SidebarTitle } from '../components';

export const ComponentPage = ({ children }) => {
   return (
      <Row>
         <Col columns={2}>
            <SidebarTitle title="Practice" />
            <SidebarButton linkTo="/components" buttonText="Hooks" />
            <SidebarTitle title="Components" />
            <SidebarButton linkTo="/components/color" buttonText="Color" />
            <SidebarButton linkTo="/components/button" buttonText="Button" />
         </Col>
         <Col columns={10}>
            {children}
         </Col>
      </Row>
   );
}
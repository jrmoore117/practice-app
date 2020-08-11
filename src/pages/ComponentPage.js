import React, { useState, useEffect } from 'react';
import { Row, Col, SidebarButton, SidebarTitle, Navbar, Button } from '../components';
import { ButtonPage, ColorPage } from '../pages';

export const ComponentPage = () => {
   const [count, setCount] = useState(0);
   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]);
   return (
      <Row>
         <Col columns={2}>
            <SidebarTitle title="Practice" />
            <SidebarButton linkTo="/hooks" buttonText="Hooks" />
            <SidebarTitle title="Components" />
            <SidebarButton linkTo="/color" buttonText="Color" />
            <SidebarButton linkTo="/button" buttonText="Button" />
         </Col>
         <Col columns={10}>
            <ColorPage path="/color" />
            <ButtonPage path="/button" />
         </Col>
      </Row>
   );
}
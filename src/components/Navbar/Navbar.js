/* @jsx jsx */
import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/core';
import { Flex, Button } from '../../components';
import { Link } from "@reach/router";


const topNavbar = css`
   height: 70px;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 35px;
   font-weight: 600;
   position: fixed;
   padding: 0 100px 0 55px;
   color: white;
   transition: all 200ms;
`

const scrolledNavbar = css`
   height: 70px;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 35px;
   font-weight: 600;
   position: fixed;
   padding: 0 100px 0 55px;
   color: #000000;
   transition: all 200ms;
   background-color: white;
`

const topLogo = css`
   opacity: 0;
   height: 45px;
   transition: all 200ms;
`

const scrolledLogo = css`
   height: 45px;
   transition: all 200ms;
`

export const Navbar = () => {
   
   let listener = null;
   const [scrollState, setScrollState] = useState("top");

   useEffect(() => {
      listener = document.addEventListener('scroll', e => {
         var scrolled = document.scrollingElement.scrollTop
         scrolled >= 1
            ? setScrollState('scrolled')
            : setScrollState('top')
      })
      return () => {
         document.removeEventListener("scroll", listener)
      }
   }, [scrollState]);

   return (
      <div css={scrollState === 'top' ? topNavbar : scrolledNavbar}>
         <Flex alignItems="center">
            <img css={scrollState === 'top' ? topLogo : scrolledLogo} src="/assets/images/bobber.svg" alt="logo" />
            <span>tackle</span>
         </Flex>
         <Flex alignItems="center">
            <Link to="/components">
               <Button type={scrollState === 'top' ? 'secondary' : null}>Get started</Button>
            </Link>
         </Flex>
      </div>
   );
}
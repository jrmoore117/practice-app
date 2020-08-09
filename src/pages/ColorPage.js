import React from 'react';
import { ColorTile, Flex } from '../components';
import { css, jsx } from '@emotion/core';

export const ColorPage = () => (
   <Flex>
      <ColorTile color="#db1d34ff" size="100px" />
      <ColorTile color="#ff3040ff" size="100px" />
      <ColorTile color="#213cf2ff" size="100px" />
      <ColorTile color="#365af2ff" size="100px" />
      <ColorTile color="#5494d3ff" size="100px" />
      <ColorTile color="#c1d6f4ff" size="100px" />
      <ColorTile color="#9e9eefff" size="100px" />
      <ColorTile color="#9494edff" size="100px" />
      <ColorTile color="#5c5cb7ff" size="100px" />
      <ColorTile color="#3a3eacff" size="100px" />
   </Flex>
)

/*
$amaranth-red: #db1d34ff;
$red-salsa: #ff3040ff;
$blue-ryb: #213cf2ff;
$ultramarine-blue: #365af2ff;
$tufts-blue: #5494d3ff;
$beau-blue: #c1d6f4ff;
$maximum-blue-purple: #9e9eefff;
$maximum-blue-purple-2: #9494edff;
$liberty: #5c5cb7ff;
$ocean-blue: #3a3eacff;
*/ 
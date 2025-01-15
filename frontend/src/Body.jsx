import React from 'react';
import { Outlet } from 'react-router';
import Foother from './components/other/Foother';
import Header from './components/other/Header';

const Body = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Foother />
    </>
  );
};

export default Body;

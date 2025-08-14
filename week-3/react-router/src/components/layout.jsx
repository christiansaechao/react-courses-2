import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const Layout = ({ name }) => {
  return (
    <div>
        <h1>Bernd's App</h1>
        <Navbar name={name} />
        <div>
            <Outlet />
        </div>
        <div>footer area</div>
    </div>
  )
}

export default Layout;
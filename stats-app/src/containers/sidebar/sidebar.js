import React, { useState } from "react";
import { Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaChartLine, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (<>
    <h3 className="sidebar-heading">Dashboard</h3>
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/"><FaHome /> Dashboard</Nav.Link>
      <Nav.Link href="/users"><FaUser /> Users</Nav.Link>
      <Nav.Link href="/analytics"><FaChartLine /> Analytics</Nav.Link>
      <Nav.Link href="/orders"><FaShoppingCart /> Orders</Nav.Link>
      <Nav.Link href="/settings"><FaCog /> Settings</Nav.Link>
    </Nav>
    </>
  );
};

export default Sidebar;
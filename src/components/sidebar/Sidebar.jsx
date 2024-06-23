import React from 'react';
import './Sidebar.css';
import AboutContent from '../aboutMe/AboutContent';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="about-me">
        <AboutContent />
        <AboutContent />
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-content">
     <h2>Who Am I?</h2>
     <p><span className="label">Name:</span> <span className="highlight">John Doe</span></p>
     <p><span className="label">Role:</span> <span className="highlight">Full-Stack Developer</span></p>
     <p><span className="label">Base:</span> <span className="highlight">Virtual Reality</span></p>
     <p><span className="label">Goal:</span> <span className="highlight">Building the Future</span></p>
    </div>
  );
};

export default AboutContent;

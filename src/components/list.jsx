import React, { useState } from 'react';
import './app.css';

const AutoScrollList = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="scroll-container mt-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`scroll-content ${isHovered ? 'paused' : ''}`}>
        {[...Array(20)].map((_, index) => (
          <>
          <span key={index} className="scroll-item">
            List Item ooscta obcaecati, distinctio beatae quibusdam cumque incidunt, animi magnam asperiores delectus a?{index + 1}
          </span>
          <hr/>
          </>
        ))}
      </div>
    </div>
  );
};

export default AutoScrollList;

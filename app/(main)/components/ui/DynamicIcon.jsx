import React from 'react';

const DynamicIcon = ({ name, className = '', ...props }) => {
  if (!name) return null;
  
  return (
    <span 
      className={`material-symbols-outlined ${className}`} 
      {...props}
    >
      {name}
    </span>
  );
};

export default DynamicIcon;

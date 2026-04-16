import React from 'react';
import * as LucideIcons from 'lucide-react';

const DynamicIcon = ({ name, className = '', ...props }) => {
  if (!name) return null;
  
  // Try to find the exact icon component
  const IconComponent = LucideIcons[name];
  
  // Fallback to HelpCircle if icon name is not found
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    const FallbackIcon = LucideIcons.HelpCircle;
    return <FallbackIcon className={className} {...props} />;
  }

  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;

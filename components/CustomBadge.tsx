import React from 'react';

interface CustomBadgeProps {
  color: string;
  children: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ color, children }) => {
  return (
    <div style={{ backgroundColor: color }} className='text-white rounded-md text-xs mx-1 px-1'>
      {children}
    </div>
  );
};

export default CustomBadge;
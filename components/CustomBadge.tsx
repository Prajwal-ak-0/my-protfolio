import React from 'react';
import { cn } from "@/lib/utils"

interface CustomBadgeProps {
  color: string;
  children: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ color, children }) => {
  return (
    <div className={cn(color,'text-white', 'rounded-md', 'text-xs', 'mx-2', 'px-1')}>
      {children}
    </div>
  );
};

export default CustomBadge;
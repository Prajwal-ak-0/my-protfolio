import React from 'react';
import { cn } from "@/lib/utils"

interface CustomBadgeProps {
  color: string;
  children: React.ReactNode;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ color, children }) => {
  return (
    <div className={cn(color,'text-white rounded-md text-xs md:mx-2 mx-1 py-1 px-1 flex items-center justify-center')}>
      {children}
    </div>
  );
};

export default CustomBadge;
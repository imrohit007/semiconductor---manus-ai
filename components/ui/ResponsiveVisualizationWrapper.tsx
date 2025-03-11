'use client';

import React, { useState, useEffect } from 'react';
import { getResponsiveDimensions } from '@/lib/responsive';

type ResponsiveVisualizationWrapperProps = {
  children: React.ReactNode;
  defaultWidth: number;
  defaultHeight: number;
  className?: string;
};

export default function ResponsiveVisualizationWrapper({
  children,
  defaultWidth,
  defaultHeight,
  className = '',
}: ResponsiveVisualizationWrapperProps) {
  const [dimensions, setDimensions] = useState({ 
    width: defaultWidth, 
    height: defaultHeight 
  });

  useEffect(() => {
    // Set initial dimensions
    setDimensions(getResponsiveDimensions(defaultWidth, defaultHeight));

    // Update dimensions on window resize
    const handleResize = () => {
      setDimensions(getResponsiveDimensions(defaultWidth, defaultHeight));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultWidth, defaultHeight]);

  return (
    <div 
      className={`flex justify-center items-center overflow-auto ${className}`}
      style={{ 
        maxWidth: '100%',
        maxHeight: dimensions.height,
      }}
    >
      {/* Clone the child element and pass the responsive dimensions */}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            width: dimensions.width,
            height: dimensions.height,
          });
        }
        return child;
      })}
    </div>
  );
}

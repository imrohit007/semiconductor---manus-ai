'use client';

import React, { useEffect, useState } from 'react';
import { getOptimizedAnimationSettings, detectLowPowerDevice } from '@/lib/performance';

type OptimizedVisualizationWrapperProps = {
  children: React.ReactNode;
  complexity?: 'low' | 'medium' | 'high';
  priority?: boolean;
};

export default function OptimizedVisualizationWrapper({
  children,
  complexity = 'medium',
  priority = false,
}: OptimizedVisualizationWrapperProps) {
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(priority);

  useEffect(() => {
    // Detect device capabilities
    setIsLowPowerDevice(detectLowPowerDevice());
    
    // Always render high-priority visualizations immediately
    if (priority) {
      setIsVisible(true);
      return;
    }

    // For non-priority visualizations, use intersection observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('visualization-wrapper');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Determine quality level based on device capability and visualization complexity
  const getQualityLevel = () => {
    if (isLowPowerDevice) {
      return complexity === 'high' ? 'low' : 'medium';
    }
    return 'high';
  };

  const qualityLevel = getQualityLevel();
  const animationSettings = getOptimizedAnimationSettings(isLowPowerDevice);

  return (
    <div 
      id="visualization-wrapper"
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {shouldRender && (
        <>
          {/* Pass optimized settings to children */}
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                qualityLevel,
                animationSettings,
                ...child.props
              });
            }
            return child;
          })}
          
          {/* Show quality indicator for debugging */}
          {process.env.NODE_ENV === 'development' && (
            <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-bl-md opacity-50">
              {qualityLevel} quality
            </div>
          )}
        </>
      )}
      
      {/* Placeholder while loading */}
      {!shouldRender && (
        <div className="flex items-center justify-center bg-gray-100 rounded-lg animate-pulse" 
             style={{ height: '300px' }}>
          <p className="text-gray-500">Loading visualization...</p>
        </div>
      )}
    </div>
  );
}

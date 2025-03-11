/* Mobile responsiveness utilities */

/* 
This file contains utility functions and media query breakpoints
to ensure consistent responsive behavior across the application
*/

// Standard breakpoints (matches Tailwind's default breakpoints)
export const breakpoints = {
  sm: 640,  // Small devices (phones, 640px and up)
  md: 768,  // Medium devices (tablets, 768px and up)
  lg: 1024, // Large devices (desktops, 1024px and up)
  xl: 1280, // Extra large devices (large desktops, 1280px and up)
  '2xl': 1536, // 2X Extra large devices (larger desktops, 1536px and up)
};

// Hook to detect current viewport size
export const useViewportSize = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0, isMobile: false, isTablet: false, isDesktop: false };
  }
  
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  return {
    width,
    height,
    isMobile: width < breakpoints.md,
    isTablet: width >= breakpoints.md && width < breakpoints.lg,
    isDesktop: width >= breakpoints.lg,
  };
};

// Utility to adjust visualization dimensions based on screen size
export const getResponsiveDimensions = (defaultWidth: number, defaultHeight: number) => {
  if (typeof window === 'undefined') {
    return { width: defaultWidth, height: defaultHeight };
  }
  
  const viewportWidth = window.innerWidth;
  
  // For mobile devices
  if (viewportWidth < breakpoints.md) {
    const scaleFactor = Math.min(1, (viewportWidth - 32) / defaultWidth);
    return {
      width: Math.floor(defaultWidth * scaleFactor),
      height: Math.floor(defaultHeight * scaleFactor),
    };
  }
  
  // For tablets
  if (viewportWidth < breakpoints.lg) {
    const scaleFactor = Math.min(1, (viewportWidth - 64) / defaultWidth);
    return {
      width: Math.floor(defaultWidth * scaleFactor),
      height: Math.floor(defaultHeight * scaleFactor),
    };
  }
  
  // For desktops (default dimensions)
  return { width: defaultWidth, height: defaultHeight };
};

// Utility to determine if touch controls should be used
export const useTouchControls = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check for touch capability
  return 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 || 
    (navigator as any).msMaxTouchPoints > 0;
};

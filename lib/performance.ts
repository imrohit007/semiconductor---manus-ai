'use client';

import React from 'react';

// Performance optimization utility for memoizing expensive components
export function memoizeComponent<T>(Component: React.ComponentType<T>, propsAreEqual?: (prevProps: T, nextProps: T) => boolean): React.MemoExoticComponent<React.ComponentType<T>> {
  return React.memo(Component, propsAreEqual);
}

// Utility to defer non-critical operations
export function deferOperation(operation: () => void, delay = 0): void {
  if (typeof window !== 'undefined') {
    window.requestIdleCallback 
      ? window.requestIdleCallback(() => operation(), { timeout: 500 })
      : setTimeout(operation, delay);
  }
}

// Utility to lazy load components
export function lazyLoadComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
): React.LazyExoticComponent<T> {
  return React.lazy(importFunc);
}

// Utility to optimize animations based on device capability
export function getOptimizedAnimationSettings(isLowPowerDevice = false) {
  return {
    frameRate: isLowPowerDevice ? 30 : 60,
    enableHardwareAcceleration: !isLowPowerDevice,
    reducedMotion: typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  };
}

// Detect if device is low power
export function detectLowPowerDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for mobile devices which are typically lower power
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check for device memory if available
  const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  
  // Check for hardware concurrency (CPU cores)
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return isMobile || lowMemory || lowCPU;
}

// Debounce function for performance-intensive operations
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for limiting execution rate
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

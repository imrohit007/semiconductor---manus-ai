'use client';

import React, { useCallback } from 'react';
import { throttle } from '@/lib/performance';

type LazyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholderColor?: string;
};

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInView, setIsInView] = React.useState(false);
  const imageRef = React.useRef<HTMLImageElement>(null);

  // Throttled intersection observer callback
  const handleIntersection = useCallback(
    throttle((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    }, 200),
    []
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '100px',
      threshold: 0.01
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [handleIntersection]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
      ref={imageRef}
    >
      {/* Placeholder */}
      <div 
        className={`absolute inset-0 bg-gray-100 transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundColor: placeholderColor }}
      />
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}
    </div>
  );
}

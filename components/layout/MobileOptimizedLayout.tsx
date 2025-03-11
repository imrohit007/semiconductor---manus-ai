'use client';

import React, { useEffect, useState } from 'react';
import { useViewportSize } from '@/lib/responsive';

export default function MobileOptimizedLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false);
  const { isMobile, isTablet } = useViewportSize();
  
  // Prevent hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  return (
    <div className={`
      ${isMobile ? 'px-2 py-4' : isTablet ? 'px-4 py-6' : 'px-6 py-8'} 
      transition-all duration-300 ease-in-out
    `}>
      {/* Add a mobile-friendly warning for complex visualizations if needed */}
      {isMobile && (
        <div className="mb-4 p-3 bg-amber-50 border-l-4 border-amber-500 text-amber-700 text-sm">
          <p>For the best experience with interactive visualizations, consider using a tablet or desktop device.</p>
        </div>
      )}
      
      {children}
    </div>
  );
}

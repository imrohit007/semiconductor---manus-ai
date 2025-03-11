'use client';

import React from 'react';
import Image from 'next/image';

// Remove unused import
export default function IntroductionLesson() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">From Vacuum Tubes to Semiconductors</h2>
        <p className="mb-4">
          The evolution of electronic devices has been one of the most significant technological advancements of the modern era. 
          Before the discovery of the transistor in 1948, electronic devices primarily relied on vacuum tubes, which were bulky, 
          power-hungry, and had limited reliability.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            The transition from vacuum tubes to semiconductor devices revolutionized electronics, enabling the miniaturization 
            and increased reliability that powers today&apos;s digital world.
          </p>
        </div>
      </section>
      
      {/* Rest of the component remains unchanged */}
    </div>
  );
}

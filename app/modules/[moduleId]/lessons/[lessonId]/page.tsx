'use client';

import React from 'react';
import Link from 'next/link';

type LessonPageProps = {
  params: {
    moduleId: string;
    lessonId: string;
  };
};

// This is a placeholder component that will be replaced with actual lesson content
export default function LessonPage({ params }: LessonPageProps) {
  const { moduleId, lessonId } = params;
  
  // This would be replaced with actual data fetching in a real implementation
  const moduleTitle = getModuleTitle(moduleId);
  const lessonTitle = getLessonTitle(moduleId, lessonId);
  
  return (
    <div>
      <div className="mb-6">
        <Link 
          href={`/modules/${moduleId}`}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {moduleTitle}
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{lessonTitle}</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <p className="text-yellow-700">
          This is a placeholder for the interactive lesson content. In the full implementation, 
          this would contain interactive visualizations, simulations, and explanatory text for the {lessonTitle.toLowerCase()} lesson.
        </p>
      </div>
      
      <div className="prose max-w-none">
        <p>
          This lesson will provide an interactive exploration of {lessonTitle.toLowerCase()} 
          with animations, simulations, and bite-sized explanations to make learning intuitive and engaging.
        </p>
        
        <p className="mt-4">
          The content will include:
        </p>
        
        <ul className="mt-2 space-y-2">
          <li>Interactive visualizations to demonstrate key concepts</li>
          <li>Step-by-step explanations with visual aids</li>
          <li>Simulations that allow parameter adjustments to see real-time effects</li>
          <li>Knowledge check questions to reinforce understanding</li>
        </ul>
      </div>
      
      <div className="mt-12 flex justify-between">
        <button 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
          disabled
        >
          Previous Lesson
        </button>
        
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          disabled
        >
          Next Lesson
        </button>
      </div>
    </div>
  );
}

// Helper functions to get module and lesson titles
function getModuleTitle(moduleId: string): string {
  const moduleTitles: Record<string, string> = {
    'introduction': 'Introduction to Semiconductors',
    'classification': 'Classification of Materials',
    'energy-bands': 'Energy Band Theory',
    'intrinsic': 'Intrinsic Semiconductors',
    'extrinsic': 'Extrinsic Semiconductors',
    'pn-junction': 'p-n Junction',
    'diode': 'Semiconductor Diode',
    'applications': 'Diode Applications',
  };
  
  return moduleTitles[moduleId] || 'Module';
}

function getLessonTitle(moduleId: string, lessonId: string): string {
  const lessonTitles: Record<string, Record<string, string>> = {
    'introduction': {
      'history': 'From Vacuum Tubes to Semiconductors',
      'applications': 'Semiconductor Applications',
    },
    'classification': {
      'conductivity': 'Conductivity Spectrum',
      'types': 'Types of Semiconductors',
    },
    'energy-bands': {
      'formation': 'Energy Bands Formation',
      'band-gaps': 'Band Gaps Explained',
    },
    'intrinsic': {
      'crystal-structure': 'Crystal Structure',
      'electron-hole-pairs': 'Electron-Hole Pairs',
    },
    'extrinsic': {
      'doping': 'Doping Process',
      'n-type': 'n-type Semiconductors',
      'p-type': 'p-type Semiconductors',
    },
    'pn-junction': {
      'formation': 'Junction Formation',
      'potential': 'Built-in Potential',
    },
    'diode': {
      'structure': 'Diode Structure',
      'forward-bias': 'Forward Bias',
      'reverse-bias': 'Reverse Bias',
      'vi-characteristics': 'V-I Characteristics',
    },
    'applications': {
      'half-wave': 'Half-Wave Rectifier',
      'full-wave': 'Full-Wave Rectifier',
      'filters': 'Filters and Smoothing',
    },
  };
  
  return lessonTitles[moduleId]?.[lessonId] || 'Lesson';
}

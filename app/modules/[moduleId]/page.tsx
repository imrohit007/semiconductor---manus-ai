'use client';

import React from 'react';
import Link from 'next/link';

type ModuleData = {
  title: string;
  description: string;
  lessons: {
    id: string;
    title: string;
  }[];
};

const moduleData: Record<string, ModuleData> = {
  'introduction': {
    title: 'Introduction to Semiconductors',
    description: 'Learn about the history and importance of semiconductor devices, from vacuum tubes to modern electronics.',
    lessons: [
      { id: 'history', title: 'From Vacuum Tubes to Semiconductors' },
      { id: 'applications', title: 'Semiconductor Applications' }
    ]
  },
  'classification': {
    title: 'Classification of Materials',
    description: 'Understand how materials are classified based on conductivity and the different types of semiconductors.',
    lessons: [
      { id: 'conductivity', title: 'Conductivity Spectrum' },
      { id: 'types', title: 'Types of Semiconductors' }
    ]
  },
  'energy-bands': {
    title: 'Energy Band Theory',
    description: 'Explore how energy bands form in solids and how they determine electrical properties of materials.',
    lessons: [
      { id: 'formation', title: 'Energy Bands Formation' },
      { id: 'band-gaps', title: 'Band Gaps Explained' }
    ]
  },
  'intrinsic': {
    title: 'Intrinsic Semiconductors',
    description: 'Discover the properties of pure semiconductors and how electron-hole pairs are generated.',
    lessons: [
      { id: 'crystal-structure', title: 'Crystal Structure' },
      { id: 'electron-hole-pairs', title: 'Electron-Hole Pairs' }
    ]
  },
  'extrinsic': {
    title: 'Extrinsic Semiconductors',
    description: 'Learn how doping changes semiconductor properties and creates n-type and p-type materials.',
    lessons: [
      { id: 'doping', title: 'Doping Process' },
      { id: 'n-type', title: 'n-type Semiconductors' },
      { id: 'p-type', title: 'p-type Semiconductors' }
    ]
  },
  'pn-junction': {
    title: 'p-n Junction',
    description: 'Understand how p-n junctions form and the physics behind the depletion region and built-in potential.',
    lessons: [
      { id: 'formation', title: 'Junction Formation' },
      { id: 'potential', title: 'Built-in Potential' }
    ]
  },
  'diode': {
    title: 'Semiconductor Diode',
    description: 'Explore how semiconductor diodes work under forward and reverse bias conditions.',
    lessons: [
      { id: 'structure', title: 'Diode Structure' },
      { id: 'forward-bias', title: 'Forward Bias' },
      { id: 'reverse-bias', title: 'Reverse Bias' },
      { id: 'vi-characteristics', title: 'V-I Characteristics' }
    ]
  },
  'applications': {
    title: 'Diode Applications',
    description: 'Learn about practical applications of diodes in rectifier circuits and filtering.',
    lessons: [
      { id: 'half-wave', title: 'Half-Wave Rectifier' },
      { id: 'full-wave', title: 'Full-Wave Rectifier' },
      { id: 'filters', title: 'Filters and Smoothing' }
    ]
  }
};

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const moduleInfo = moduleData[params.moduleId];
  
  if (!moduleInfo) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-red-600">Module not found</h1>
        <p className="mt-4">The requested module does not exist.</p>
        <Link href="/modules" className="mt-6 inline-block text-blue-600 hover:underline">
          Return to Modules
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-800 mb-4">{moduleInfo.title}</h1>
      <p className="text-lg text-gray-700 mb-8">{moduleInfo.description}</p>
      
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Lessons</h2>
      <div className="grid gap-4">
        {moduleInfo.lessons.map((lesson, index) => (
          <Link 
            key={lesson.id}
            href={`/modules/${params.moduleId}/lessons/${lesson.id}`}
            className="block bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-md rounded-lg p-4 transition-all"
          >
            <div className="flex items-center">
              <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center font-medium mr-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-medium text-gray-800">{lesson.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Ready to explore?</h3>
        <p className="text-gray-700 mb-4">
          Start with the first lesson to begin your interactive learning journey through {moduleInfo.title.toLowerCase()}.
        </p>
        <Link 
          href={`/modules/${params.moduleId}/lessons/${moduleInfo.lessons[0].id}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Start First Lesson
        </Link>
      </div>
    </div>
  );
}

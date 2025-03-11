'use client';

import React from 'react';
import Link from 'next/link';

type ModuleSidebarProps = {
  activeModule?: string;
};

const modules = [
  { id: 'introduction', name: 'Introduction to Semiconductors' },
  { id: 'classification', name: 'Classification of Materials' },
  { id: 'energy-bands', name: 'Energy Band Theory' },
  { id: 'intrinsic', name: 'Intrinsic Semiconductors' },
  { id: 'extrinsic', name: 'Extrinsic Semiconductors' },
  { id: 'pn-junction', name: 'p-n Junction' },
  { id: 'diode', name: 'Semiconductor Diode' },
  { id: 'applications', name: 'Diode Applications' },
];

export default function ModuleSidebar({ activeModule }: ModuleSidebarProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-64">
      <h2 className="text-xl font-bold mb-4 text-indigo-800">Learning Modules</h2>
      <nav>
        <ul className="space-y-2">
          {modules.map((module) => (
            <li key={module.id}>
              <Link
                href={`/modules/${module.id}`}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  activeModule === module.id
                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {module.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

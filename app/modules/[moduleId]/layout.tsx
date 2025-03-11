'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ModuleSidebar from '@/components/layout/ModuleSidebar';

type ModuleLayoutProps = {
  children: React.ReactNode;
  params: {
    moduleId: string;
  };
};

export default function ModuleLayout({ children, params }: ModuleLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col md:flex-row flex-1 container mx-auto px-4 py-8 gap-6">
        <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
          <ModuleSidebar activeModule={params.moduleId} />
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

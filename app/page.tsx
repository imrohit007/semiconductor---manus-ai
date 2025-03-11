'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Welcome to Semiconductor Physics</h1>
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Semiconductor Physics Interactively
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore semiconductor concepts through interactive visualizations, 
              simulations, and bite-sized lessons designed for intuitive learning.
            </p>
            <Link 
              href="/modules/introduction" 
              className="bg-white text-indigo-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg"
            >
              Start Learning
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Interactive Learning Features
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Interactive Visualizations</h3>
                <p className="text-gray-600 text-center">
                  Explore complex semiconductor concepts through dynamic, interactive visualizations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Virtual Experiments</h3>
                <p className="text-gray-600 text-center">
                  Conduct virtual experiments to understand semiconductor behavior in different conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Bite-sized Lessons</h3>
                <p className="text-gray-600 text-center">
                  Learn at your own pace with modular, bite-sized lessons designed for maximum comprehension.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Module Preview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Learning Modules
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'introduction', name: 'Introduction to Semiconductors', color: 'bg-blue-500' },
                { id: 'classification', name: 'Classification of Materials', color: 'bg-indigo-500' },
                { id: 'energy-bands', name: 'Energy Band Theory', color: 'bg-purple-500' },
                { id: 'intrinsic', name: 'Intrinsic Semiconductors', color: 'bg-pink-500' },
                { id: 'extrinsic', name: 'Extrinsic Semiconductors', color: 'bg-red-500' },
                { id: 'pn-junction', name: 'p-n Junction', color: 'bg-orange-500' },
                { id: 'diode', name: 'Semiconductor Diode', color: 'bg-yellow-500' },
                { id: 'applications', name: 'Diode Applications', color: 'bg-green-500' },
              ].map((module) => (
                <Link 
                  key={module.id}
                  href={`/modules/${module.id}`}
                  className="block group"
                >
                  <div className={`${module.color} h-48 rounded-lg shadow-md p-6 text-white transition-transform group-hover:scale-105`}>
                    <h3 className="text-xl font-semibold mb-2">{module.name}</h3>
                    <div className="mt-auto pt-4">
                      <span className="inline-block mt-2 text-white group-hover:underline">
                        Explore Module →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Semiconductor Physics Interactive Learning</p>
          <p className="mt-2 text-gray-400">
            An educational web application for learning semiconductor concepts
          </p>
        </div>
      </footer>
    </div>
  );
}

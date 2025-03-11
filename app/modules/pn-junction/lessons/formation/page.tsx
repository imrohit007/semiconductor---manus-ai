'use client';

import React from 'react';
import PNJunctionDiagram from '@/components/visualizations/PNJunctionDiagram';

export default function PNJunctionLesson() {
  const [biasMode, setBiasMode] = React.useState<'none' | 'forward' | 'reverse'>('none');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">p-n Junction Formation</h2>
        <p className="mb-4">
          A p-n junction is the fundamental building block of many semiconductor devices including diodes, transistors, and integrated circuits. Understanding how a p-n junction forms and behaves is essential to understanding modern electronics.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            A p-n junction is formed when a p-type semiconductor (with excess holes) is brought into contact with an n-type semiconductor (with excess electrons). The boundary between these two regions is called the p-n junction.
          </p>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Junction Formation Process</h3>
        <p className="mb-4">
          When p-type and n-type semiconductors are joined together, two important processes occur:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Diffusion:</strong> Due to the concentration gradient, electrons from the n-side diffuse to the p-side, and holes from the p-side diffuse to the n-side.</li>
          <li><strong>Drift:</strong> As charge carriers move across the junction, they leave behind immobile charged ions, creating an electric field that opposes further diffusion.</li>
        </ul>
        <p className="mb-4">
          These processes lead to the formation of a region near the junction that is depleted of mobile charge carriers, called the <strong>depletion region</strong>.
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: p-n Junction</h3>
        <p className="mb-6">
          Explore how a p-n junction behaves under different bias conditions. Observe the changes in the depletion region width and the movement of charge carriers.
        </p>
        
        <div className="flex flex-col items-center mb-6">
          <PNJunctionDiagram biasMode={biasMode} width={500} height={300} />
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setBiasMode('none')}
            className={`px-4 py-2 rounded-md transition-colors ${
              biasMode === 'none' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            No Bias
          </button>
          <button 
            onClick={() => setBiasMode('forward')}
            className={`px-4 py-2 rounded-md transition-colors ${
              biasMode === 'forward' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Forward Bias
          </button>
          <button 
            onClick={() => setBiasMode('reverse')}
            className={`px-4 py-2 rounded-md transition-colors ${
              biasMode === 'reverse' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Reverse Bias
          </button>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>No Bias:</strong> The depletion region forms naturally, and diffusion and drift currents are balanced.</li>
            <li><strong>Forward Bias:</strong> The depletion region narrows, barrier height decreases, and current flows easily.</li>
            <li><strong>Reverse Bias:</strong> The depletion region widens, barrier height increases, and very little current flows.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Depletion Region</h3>
        <p className="mb-4">
          The depletion region has several important characteristics:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>It is depleted of mobile charge carriers (electrons and holes).</li>
          <li>It contains immobile charged ions (positive on the n-side, negative on the p-side).</li>
          <li>It creates an electric field directed from the n-side to the p-side.</li>
          <li>It forms a potential barrier that prevents further diffusion of majority carriers.</li>
          <li>Its width depends on the doping concentration and applied voltage.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Barrier Potential</h3>
        <p className="mb-4">
          The electric field in the depletion region creates a potential difference called the <strong>barrier potential</strong> or <strong>built-in potential</strong>.
        </p>
        <p className="mb-4">
          This potential barrier:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Prevents further diffusion of majority carriers across the junction.</li>
          <li>Is typically around 0.7V for silicon and 0.3V for germanium at room temperature.</li>
          <li>Can be modified by applying an external voltage (bias).</li>
        </ul>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Biasing the p-n Junction</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Forward Bias</h4>
            <p className="mb-2">When positive terminal is connected to p-side and negative to n-side:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Depletion region width decreases</li>
              <li>Barrier potential decreases</li>
              <li>Majority carriers easily cross the junction</li>
              <li>Current flows in the forward direction</li>
              <li>Minority carrier injection occurs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Reverse Bias</h4>
            <p className="mb-2">When negative terminal is connected to p-side and positive to n-side:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Depletion region width increases</li>
              <li>Barrier potential increases</li>
              <li>Majority carriers cannot cross the junction</li>
              <li>Only a small reverse saturation current flows</li>
              <li>Current is due to minority carriers</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">Why do holes diffuse from the p-region to the n-region in an unbiased p-n junction?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">Free electrons in the n-region attract them</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">They move across the junction by the potential difference</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">Hole concentration in p-region is more compared to n-region</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">All of the above</label>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            Check Answer
          </button>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Summary</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>A p-n junction forms at the boundary between p-type and n-type semiconductors.</li>
          <li>Diffusion of majority carriers across the junction creates a depletion region.</li>
          <li>The depletion region contains immobile charged ions and creates an electric field.</li>
          <li>The electric field creates a barrier potential that opposes further diffusion.</li>
          <li>Forward bias reduces the barrier potential and allows current to flow easily.</li>
          <li>Reverse bias increases the barrier potential and blocks current flow.</li>
          <li>The p-n junction is the basic building block for semiconductor devices like diodes and transistors.</li>
        </ul>
      </section>
    </div>
  );
}

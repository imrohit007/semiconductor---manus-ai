'use client';

import React, { useState } from 'react';
import VirtualExperiment from '@/components/simulations/VirtualExperiment';

export default function VirtualLabPage() {
  const [activeExperiment, setActiveExperiment] = useState<'diode-circuit' | 'temperature-effect' | 'doping-concentration'>('diode-circuit');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6">Semiconductor Virtual Lab</h1>
      
      <p className="mb-8 text-lg text-gray-700">
        Welcome to the virtual laboratory! Here you can conduct experiments to explore semiconductor 
        properties and behaviors. Select an experiment below to get started.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <button 
          onClick={() => setActiveExperiment('diode-circuit')}
          className={`p-4 rounded-lg shadow-md transition-colors ${
            activeExperiment === 'diode-circuit' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white hover:bg-indigo-50'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-2 ${activeExperiment === 'diode-circuit' ? 'text-white' : 'text-indigo-700'}`}>
            Diode Circuit Experiment
          </h2>
          <p className={activeExperiment === 'diode-circuit' ? 'text-indigo-100' : 'text-gray-600'}>
            Explore how diodes behave in a simple circuit with varying voltage.
          </p>
        </button>
        
        <button 
          onClick={() => setActiveExperiment('temperature-effect')}
          className={`p-4 rounded-lg shadow-md transition-colors ${
            activeExperiment === 'temperature-effect' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white hover:bg-indigo-50'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-2 ${activeExperiment === 'temperature-effect' ? 'text-white' : 'text-indigo-700'}`}>
            Temperature Effect Experiment
          </h2>
          <p className={activeExperiment === 'temperature-effect' ? 'text-indigo-100' : 'text-gray-600'}>
            Investigate how temperature affects semiconductor carrier concentration and conductivity.
          </p>
        </button>
        
        <button 
          onClick={() => setActiveExperiment('doping-concentration')}
          className={`p-4 rounded-lg shadow-md transition-colors ${
            activeExperiment === 'doping-concentration' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-white hover:bg-indigo-50'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-2 ${activeExperiment === 'doping-concentration' ? 'text-white' : 'text-indigo-700'}`}>
            Doping Concentration Experiment
          </h2>
          <p className={activeExperiment === 'doping-concentration' ? 'text-indigo-100' : 'text-gray-600'}>
            Study how doping type and concentration affect carrier concentrations in semiconductors.
          </p>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-indigo-50 border-b border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-800">
            {activeExperiment === 'diode-circuit' && 'Diode Circuit Experiment'}
            {activeExperiment === 'temperature-effect' && 'Temperature Effect Experiment'}
            {activeExperiment === 'doping-concentration' && 'Doping Concentration Experiment'}
          </h3>
        </div>
        
        <div className="p-4 h-[600px]">
          <VirtualExperiment experimentType={activeExperiment} width={800} height={550} />
        </div>
        
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <h4 className="font-medium text-gray-800 mb-2">Experiment Notes:</h4>
          
          {activeExperiment === 'diode-circuit' && (
            <div className="text-gray-700">
              <p className="mb-2">
                This experiment demonstrates how a semiconductor diode behaves in a simple circuit.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adjust the voltage to see how current flows through the circuit.</li>
                <li>Notice that the diode only conducts significant current when forward biased above its threshold voltage.</li>
                <li>Compare silicon (0.7V threshold) and germanium (0.3V threshold) diodes.</li>
                <li>Observe how the bulb brightness changes with current flow.</li>
              </ul>
            </div>
          )}
          
          {activeExperiment === 'temperature-effect' && (
            <div className="text-gray-700">
              <p className="mb-2">
                This experiment shows how temperature affects the electrical properties of intrinsic semiconductors.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adjust the temperature to see how carrier concentration changes.</li>
                <li>Note that carrier concentration increases exponentially with temperature.</li>
                <li>Conductivity is directly proportional to carrier concentration.</li>
                <li>This is why semiconductor devices are sensitive to temperature changes.</li>
              </ul>
            </div>
          )}
          
          {activeExperiment === 'doping-concentration' && (
            <div className="text-gray-700">
              <p className="mb-2">
                This experiment demonstrates how doping affects carrier concentrations in semiconductors.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Adjust the doping concentration and switch between n-type and p-type doping.</li>
                <li>In n-type semiconductors, electrons are majority carriers and holes are minority carriers.</li>
                <li>In p-type semiconductors, holes are majority carriers and electrons are minority carriers.</li>
                <li>Note that the product of electron and hole concentrations remains constant: n<sub>e</sub> × n<sub>h</sub> = n<sub>i</sub>²</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

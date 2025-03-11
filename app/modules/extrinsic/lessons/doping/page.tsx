'use client';

import React from 'react';
import DopingVisualization from '@/components/visualizations/DopingVisualization';

export default function ExtrinsicSemiconductorsLesson() {
  const [dopingType, setDopingType] = React.useState<'n-type' | 'p-type'>('n-type');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Extrinsic Semiconductors</h2>
        <p className="mb-4">
          Extrinsic semiconductors are created by adding controlled amounts of specific impurities to pure (intrinsic) semiconductors. This process, called doping, dramatically increases the conductivity of the semiconductor and is fundamental to creating modern electronic devices.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            The deliberate addition of impurities (dopants) at concentrations of a few parts per million can increase semiconductor conductivity by factors of thousands or millions, enabling the precise control of electrical properties.
          </p>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: Doping Process</h3>
        <p className="mb-6">
          Explore how adding different types of impurities creates n-type and p-type semiconductors. Observe how temperature affects the behavior of charge carriers in the doped material.
        </p>
        
        <div className="flex flex-col items-center mb-6">
          <DopingVisualization type={dopingType} width={500} height={400} />
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setDopingType('n-type')}
            className={`px-4 py-2 rounded-md transition-colors ${
              dopingType === 'n-type' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            N-Type (Donor Doping)
          </button>
          <button 
            onClick={() => setDopingType('p-type')}
            className={`px-4 py-2 rounded-md transition-colors ${
              dopingType === 'p-type' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            P-Type (Acceptor Doping)
          </button>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>N-Type:</strong> Pentavalent dopants (like P, As, Sb) provide extra electrons as majority carriers.</li>
            <li><strong>P-Type:</strong> Trivalent dopants (like B, Al, In) create holes as majority carriers.</li>
            <li><strong>Temperature:</strong> Higher temperatures increase the number of thermally generated electron-hole pairs.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Doping Process</h3>
        <p className="mb-4">
          Doping is the process of intentionally introducing impurities into a pure semiconductor to modify its electrical properties. For silicon or germanium semiconductors:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>The dopant concentration is typically very small (a few parts per million).</li>
          <li>The dopant atoms must be similar in size to the semiconductor atoms to avoid distorting the crystal lattice.</li>
          <li>The dopant atoms occupy substitutional positions in the crystal lattice, replacing some of the semiconductor atoms.</li>
          <li>The type of dopant determines whether the semiconductor becomes n-type or p-type.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">N-Type Semiconductors</h3>
        <p className="mb-4">
          N-type semiconductors are created by doping silicon or germanium with pentavalent (Group V) elements such as phosphorus (P), arsenic (As), or antimony (Sb).
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Donor Atoms:</strong> The pentavalent dopant has five valence electrons. Four of these form covalent bonds with neighboring silicon atoms, while the fifth is loosely bound.</li>
          <li><strong>Extra Electrons:</strong> The fifth electron requires very little energy to break free (about 0.05 eV for silicon) and becomes a conduction electron.</li>
          <li><strong>Majority Carriers:</strong> In n-type semiconductors, electrons are the majority carriers and holes are the minority carriers.</li>
          <li><strong>Energy Levels:</strong> The donor atoms create energy levels just below the conduction band, making it easier for electrons to be excited into the conduction band.</li>
        </ul>
        <p className="mb-4">
          The relationship between electron and hole concentrations in n-type semiconductors is given by:
        </p>
        <div className="bg-white p-4 rounded-lg text-center mb-4">
          <p className="text-lg font-medium">n<sub>e</sub> &times; n<sub>h</sub> = n<sub>i</sub><sup>2</sup></p>
          <p className="text-sm text-gray-600 mt-2">Where n<sub>e</sub> is electron concentration, n<sub>h</sub> is hole concentration, and n<sub>i</sub> is intrinsic carrier concentration</p>
        </div>
        <p>
          In n-type semiconductors, n<sub>e</sub> &gt;&gt; n<sub>h</sub>, meaning the electron concentration is much greater than the hole concentration.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">P-Type Semiconductors</h3>
        <p className="mb-4">
          P-type semiconductors are created by doping silicon or germanium with trivalent (Group III) elements such as boron (B), aluminum (Al), or indium (In).
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Acceptor Atoms:</strong> The trivalent dopant has only three valence electrons. These form covalent bonds with three neighboring silicon atoms, leaving one bond incomplete.</li>
          <li><strong>Hole Creation:</strong> The incomplete bond acts as a hole, which can accept an electron from a neighboring silicon atom.</li>
          <li><strong>Majority Carriers:</strong> In p-type semiconductors, holes are the majority carriers and electrons are the minority carriers.</li>
          <li><strong>Energy Levels:</strong> The acceptor atoms create energy levels just above the valence band, making it easier for electrons to be excited from the valence band, leaving holes behind.</li>
        </ul>
        <p className="mb-4">
          Similar to n-type semiconductors, the relationship between electron and hole concentrations is:
        </p>
        <div className="bg-white p-4 rounded-lg text-center mb-4">
          <p className="text-lg font-medium">n<sub>e</sub> &times; n<sub>h</sub> = n<sub>i</sub><sup>2</sup></p>
        </div>
        <p>
          In p-type semiconductors, n<sub>h</sub> &gt;&gt; n<sub>e</sub>, meaning the hole concentration is much greater than the electron concentration.
        </p>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Energy Band Diagrams</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">N-Type Semiconductor</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Donor energy level (E<sub>D</sub>) is slightly below the conduction band</li>
              <li>Electrons easily move from donor level to conduction band</li>
              <li>Fermi level shifts upward toward the conduction band</li>
              <li>Conduction band contains many electrons from donor atoms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">P-Type Semiconductor</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Acceptor energy level (E<sub>A</sub>) is slightly above the valence band</li>
              <li>Electrons easily move from valence band to acceptor level, creating holes</li>
              <li>Fermi level shifts downward toward the valence band</li>
              <li>Valence band contains many holes due to acceptor atoms</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">In an n-type silicon semiconductor, which statement is true?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">Electrons are majority carriers and trivalent atoms are the dopants</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">Electrons are minority carriers and pentavalent atoms are the dopants</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">Holes are minority carriers and pentavalent atoms are the dopants</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">Holes are majority carriers and trivalent atoms are the dopants</label>
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
          <li>Extrinsic semiconductors are created by adding specific impurities (dopants) to pure semiconductors.</li>
          <li>N-type semiconductors are created by adding pentavalent dopants (P, As, Sb), which provide extra electrons as majority carriers.</li>
          <li>P-type semiconductors are created by adding trivalent dopants (B, Al, In), which create holes as majority carriers.</li>
          <li>The relationship n<sub>e</sub> &times; n<sub>h</sub> = n<sub>i</sub><sup>2</sup> holds for all semiconductors.</li>
          <li>Doping creates additional energy levels in the band gap, making it easier for charge carriers to be generated.</li>
          <li>The type and concentration of dopants determine the electrical properties of the semiconductor.</li>
          <li>Extrinsic semiconductors are the foundation of modern electronic devices like diodes and transistors.</li>
        </ul>
      </section>
    </div>
  );
}

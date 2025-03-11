'use client';

import React from 'react';
import EnergyBandDiagram from '@/components/visualizations/EnergyBandDiagram';

export default function EnergyBandsLesson() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Energy Band Theory</h2>
        <p className="mb-4">
          In solid-state physics, energy bands are ranges of energy levels that electrons within a solid may occupy. 
          The way these bands form and their properties determine whether a material is a conductor, semiconductor, or insulator.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            When atoms come together to form a solid, their outer electron orbits overlap. 
            This creates energy bands with continuous energy variation instead of the discrete energy levels found in isolated atoms.
          </p>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Key Energy Bands</h3>
        <p className="mb-4">
          Two energy bands are particularly important for understanding electrical properties:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Valence Band:</strong> Contains the valence electrons that form bonds between atoms in the solid.</li>
          <li><strong>Conduction Band:</strong> Contains free electrons that can move through the material, creating an electric current.</li>
        </ul>
        <p className="mb-4">
          The gap between these bands, called the <strong>energy band gap (Eg)</strong>, determines the electrical properties of the material.
        </p>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: Energy Bands</h3>
        <p className="mb-6">
          Explore how energy bands differ in metals, semiconductors, and insulators. Notice how the band gap and electron distribution change with material type.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <EnergyBandDiagram type="metal" width={300} height={250} />
          </div>
          
          <div className="flex flex-col items-center">
            <EnergyBandDiagram type="semiconductor" width={300} height={250} />
          </div>
          
          <div className="flex flex-col items-center">
            <EnergyBandDiagram type="insulator" width={300} height={250} />
          </div>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Metals:</strong> Overlapping bands or partially filled conduction band allows easy electron movement.</li>
            <li><strong>Semiconductors:</strong> Small band gap (0.2-3 eV) allows some electrons to be thermally excited to the conduction band.</li>
            <li><strong>Insulators:</strong> Large band gap (>3 eV) prevents electrons from reaching the conduction band under normal conditions.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Temperature Effects</h3>
        <p className="mb-4">
          Temperature significantly affects how electrons populate these energy bands:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>At absolute zero (0K), the valence band is completely filled and the conduction band is empty in semiconductors and insulators.</li>
          <li>As temperature increases, some electrons gain enough thermal energy to jump from the valence band to the conduction band.</li>
          <li>Each electron that moves to the conduction band leaves behind a hole in the valence band.</li>
        </ul>
        <p>
          This is why semiconductor conductivity increases with temperature, unlike metals where conductivity decreases with temperature due to increased lattice vibrations.
        </p>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Energy Gap Values</h3>
        <p className="mb-4">
          The energy gap varies significantly between materials:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-2 text-left">Material</th>
                <th className="px-4 py-2 text-left">Energy Gap (eV)</th>
                <th className="px-4 py-2 text-left">Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Diamond (Carbon)</td>
                <td className="px-4 py-2">5.4</td>
                <td className="px-4 py-2">Insulator</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Silicon (Si)</td>
                <td className="px-4 py-2">1.1</td>
                <td className="px-4 py-2">Semiconductor</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Germanium (Ge)</td>
                <td className="px-4 py-2">0.7</td>
                <td className="px-4 py-2">Semiconductor</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Tin (Sn)</td>
                <td className="px-4 py-2">0</td>
                <td className="px-4 py-2">Metal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Note: All these elements belong to Group IV in the periodic table, yet their electrical properties vary dramatically due to differences in their energy band gaps.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">Why does silicon behave as a semiconductor while diamond (carbon) behaves as an insulator?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">They have different crystal structures</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">Silicon has a much smaller energy band gap (1.1 eV) compared to diamond (5.4 eV)</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">Silicon has more electrons than carbon</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">Silicon atoms are larger than carbon atoms</label>
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
          <li>Energy bands form when atoms come together in a solid, creating ranges of allowed energy levels.</li>
          <li>The valence band contains bound electrons, while the conduction band contains free electrons.</li>
          <li>The energy band gap (Eg) determines whether a material is a metal, semiconductor, or insulator.</li>
          <li>Metals: Overlapping bands or partially filled conduction band (Eg ≈ 0 eV)</li>
          <li>Semiconductors: Small band gap (0.2 eV &lt; Eg &lt; 3 eV)</li>
          <li>Insulators: Large band gap (Eg {'>'}3 eV)</li>
          <li>Temperature affects band populations by providing thermal energy for electrons to cross the band gap.</li>
        </ul>
      </section>
    </div>
  );
}

'use client';

import React from 'react';
import IntrinsicSemiconductorAnimation from '@/components/visualizations/IntrinsicSemiconductorAnimation';

export default function IntrinsicSemiconductorsLesson() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Intrinsic Semiconductors</h2>
        <p className="mb-4">
          Intrinsic semiconductors are pure semiconductor materials without any significant impurities or dopants. 
          Silicon (Si) and germanium (Ge) are the most common examples of intrinsic semiconductors used in electronic devices.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            In an intrinsic semiconductor, the number of free electrons equals the number of holes. These charge carriers are 
            generated solely through thermal excitation, making their electrical properties highly temperature-dependent.
          </p>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: Intrinsic Semiconductor</h3>
        <p className="mb-6">
          Explore how thermal energy creates electron-hole pairs in an intrinsic semiconductor. 
          Adjust the temperature to see how it affects the number of charge carriers.
        </p>
        
        <div className="flex flex-col items-center mb-6">
          <IntrinsicSemiconductorAnimation width={500} height={400} />
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Thermal Generation:</strong> Electrons gain energy from heat to break covalent bonds and become free.</li>
            <li><strong>Electron-Hole Pairs:</strong> Each freed electron leaves behind a hole in the valence band.</li>
            <li><strong>Temperature Dependence:</strong> Higher temperatures create more electron-hole pairs.</li>
            <li><strong>Equal Concentrations:</strong> The number of electrons equals the number of holes (n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>).</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Crystal Structure</h3>
        <p className="mb-4">
          Silicon and germanium have a diamond-like crystal structure, where each atom forms covalent bonds with four neighboring atoms.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Covalent Bonding:</strong> Each Si or Ge atom shares its four valence electrons with four neighboring atoms.</li>
          <li><strong>Tetrahedral Arrangement:</strong> The atoms are arranged in a tetrahedral structure with bond angles of 109.5°.</li>
          <li><strong>Lattice Spacing:</strong> The distance between adjacent atoms is 5.43 Å for silicon and 5.66 Å for germanium.</li>
          <li><strong>Stable Structure:</strong> At low temperatures, all electrons participate in covalent bonds, making the material behave almost like an insulator.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Thermal Generation of Charge Carriers</h3>
        <p className="mb-4">
          At temperatures above absolute zero, thermal energy can break some covalent bonds, creating free electrons and holes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Bond Breaking:</strong> Thermal energy can excite a valence electron enough to break its covalent bond.</li>
          <li><strong>Free Electron:</strong> The excited electron becomes a free electron in the conduction band.</li>
          <li><strong>Hole Creation:</strong> The vacancy left behind in the covalent bond is a hole in the valence band.</li>
          <li><strong>Pair Generation:</strong> Each thermal excitation creates one electron-hole pair.</li>
          <li><strong>Temperature Dependence:</strong> The number of electron-hole pairs increases exponentially with temperature.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Charge Carrier Movement</h3>
        <p className="mb-4">
          Both electrons and holes contribute to electrical conduction in intrinsic semiconductors:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Electron Movement:</strong> Free electrons in the conduction band move randomly due to thermal energy. When an electric field is applied, they drift toward the positive terminal.</li>
          <li><strong>Hole Movement:</strong> Holes appear to move when an electron from a neighboring covalent bond fills the vacancy, creating a new vacancy at its original position.</li>
          <li><strong>Effective Mass:</strong> Holes behave as if they have an effective positive charge and mass, moving in the direction of the electric field.</li>
          <li><strong>Total Current:</strong> The total current in a semiconductor is the sum of electron current and hole current: I = I<sub>e</sub> + I<sub>h</sub></li>
        </ul>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Intrinsic Carrier Concentration</h3>
        <p className="mb-4">
          The concentration of thermally generated electron-hole pairs in an intrinsic semiconductor is called the intrinsic carrier concentration (n<sub>i</sub>).
        </p>
        <div className="bg-white p-4 rounded-lg text-center mb-4">
          <p className="text-lg font-medium">n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub></p>
          <p className="text-sm text-gray-600 mt-2">Where n<sub>e</sub> is electron concentration, n<sub>h</sub> is hole concentration</p>
        </div>
        <p className="mb-4">
          The intrinsic carrier concentration depends strongly on temperature and band gap:
        </p>
        <div className="bg-white p-4 rounded-lg text-center mb-4">
          <p className="text-lg font-medium">n<sub>i</sub> ∝ T<sup>3/2</sup> e<sup>-E<sub>g</sub>/2kT</sup></p>
          <p className="text-sm text-gray-600 mt-2">Where T is temperature, E<sub>g</sub> is band gap energy, and k is Boltzmann's constant</p>
        </div>
        <p>
          At room temperature (300K), the intrinsic carrier concentration is approximately:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Silicon: n<sub>i</sub> ≈ 1.5 × 10<sup>10</sup> cm<sup>-3</sup></li>
          <li>Germanium: n<sub>i</sub> ≈ 2.5 × 10<sup>13</sup> cm<sup>-3</sup></li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Recombination Process</h3>
        <p className="mb-4">
          While thermal energy continuously generates electron-hole pairs, there is also a simultaneous process of recombination:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Direct Recombination:</strong> A free electron in the conduction band falls into a hole in the valence band, eliminating both carriers.</li>
          <li><strong>Energy Release:</strong> The energy released during recombination can be emitted as heat or light (photons).</li>
          <li><strong>Equilibrium:</strong> At thermal equilibrium, the rate of generation equals the rate of recombination.</li>
          <li><strong>Carrier Lifetime:</strong> The average time a carrier exists before recombination is called its lifetime.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">Why does the conductivity of intrinsic semiconductors increase with temperature?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">The crystal structure expands, allowing electrons to move more freely</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">Thermal energy generates more electron-hole pairs, increasing the number of charge carriers</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">The band gap decreases, making it easier for electrons to jump to the conduction band</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">The mobility of electrons increases with temperature</label>
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
          <li>Intrinsic semiconductors are pure semiconductor materials without added impurities.</li>
          <li>Silicon and germanium have a diamond-like crystal structure with each atom forming four covalent bonds.</li>
          <li>Thermal energy can break covalent bonds, creating free electrons and holes.</li>
          <li>In intrinsic semiconductors, the number of electrons equals the number of holes (n<sub>e</sub> = n<sub>h</sub> = n<sub>i</sub>).</li>
          <li>Both electrons and holes contribute to electrical conduction.</li>
          <li>The intrinsic carrier concentration increases exponentially with temperature.</li>
          <li>At equilibrium, the rate of electron-hole pair generation equals the rate of recombination.</li>
          <li>The conductivity of intrinsic semiconductors is too low for most practical applications, which is why doping is used to create extrinsic semiconductors.</li>
        </ul>
      </section>
    </div>
  );
}

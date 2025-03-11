'use client';

import React from 'react';

export default function ClassificationLesson() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Classification of Materials</h2>
        <p className="mb-4">
          Materials can be classified into different categories based on their electrical conductivity. Understanding these classifications is fundamental to semiconductor physics and helps explain why certain materials are used in electronic devices.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            The electrical conductivity of a material depends on its atomic structure, particularly the arrangement of electrons in energy bands and the energy gap between these bands.
          </p>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Conductivity Spectrum</h3>
        <p className="mb-4">
          Materials are classified into three main categories based on their electrical conductivity (σ) or resistivity (ρ = 1/σ):
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-4 py-2 text-left">Material Type</th>
                <th className="px-4 py-2 text-left">Resistivity (ρ) in Ω·m</th>
                <th className="px-4 py-2 text-left">Conductivity (σ) in S/m</th>
                <th className="px-4 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium">Metals</td>
                <td className="px-4 py-2">10<sup>-8</sup> - 10<sup>-2</sup></td>
                <td className="px-4 py-2">10<sup>8</sup> - 10<sup>2</sup></td>
                <td className="px-4 py-2">Copper, Silver, Aluminum</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Semiconductors</td>
                <td className="px-4 py-2">10<sup>-5</sup> - 10<sup>6</sup></td>
                <td className="px-4 py-2">10<sup>5</sup> - 10<sup>-6</sup></td>
                <td className="px-4 py-2">Silicon, Germanium, Gallium Arsenide</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Insulators</td>
                <td className="px-4 py-2">10<sup>11</sup> - 10<sup>19</sup></td>
                <td className="px-4 py-2">10<sup>-11</sup> - 10<sup>-19</sup></td>
                <td className="px-4 py-2">Glass, Rubber, Diamond</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <div className="w-full h-16 rounded-lg overflow-hidden flex">
            <div className="bg-blue-600 w-1/3 flex items-center justify-center text-white font-medium">
              Metals
            </div>
            <div className="bg-green-500 w-1/3 flex items-center justify-center text-white font-medium">
              Semiconductors
            </div>
            <div className="bg-red-500 w-1/3 flex items-center justify-center text-white font-medium">
              Insulators
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>High Conductivity</span>
            <span>Medium Conductivity</span>
            <span>Low Conductivity</span>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Metals</h3>
        <p className="mb-4">
          Metals are excellent conductors of electricity due to their atomic structure and bonding.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Atomic Structure:</strong> Metals have loosely bound outer electrons that can easily move through the material.</li>
          <li><strong>Band Structure:</strong> The valence and conduction bands overlap, allowing electrons to move freely without needing to overcome an energy gap.</li>
          <li><strong>Temperature Effect:</strong> As temperature increases, the conductivity of metals decreases due to increased lattice vibrations that scatter electrons.</li>
          <li><strong>Examples:</strong> Copper, silver, gold, aluminum, and iron are common metals used in electrical applications.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Semiconductors</h3>
        <p className="mb-4">
          Semiconductors have conductivity between metals and insulators, making them uniquely valuable for electronic devices.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Atomic Structure:</strong> Semiconductors typically have four valence electrons and form covalent bonds with neighboring atoms.</li>
          <li><strong>Band Structure:</strong> There is a small energy gap (band gap) between the valence and conduction bands, typically between 0.2 eV and 3 eV.</li>
          <li><strong>Temperature Effect:</strong> Unlike metals, the conductivity of semiconductors increases with temperature as more electrons gain enough energy to jump to the conduction band.</li>
          <li><strong>Doping:</strong> The conductivity of semiconductors can be precisely controlled by adding specific impurities (dopants).</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Insulators</h3>
        <p className="mb-4">
          Insulators have very low electrical conductivity and are used to prevent the flow of current.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Atomic Structure:</strong> Insulators have tightly bound electrons that cannot easily move through the material.</li>
          <li><strong>Band Structure:</strong> There is a large energy gap (greater than 3 eV) between the valence and conduction bands, making it difficult for electrons to become mobile.</li>
          <li><strong>Temperature Effect:</strong> Even at high temperatures, very few electrons gain enough energy to cross the large band gap.</li>
          <li><strong>Examples:</strong> Glass, rubber, plastic, ceramic, and diamond are common insulators.</li>
        </ul>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Types of Semiconductors</h3>
        <p className="mb-4">
          Semiconductors can be further classified into different categories:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">By Composition</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Elemental Semiconductors:</strong> Made of a single element (Si, Ge)</li>
              <li><strong>Compound Semiconductors:</strong> Made of two or more elements</li>
              <ul className="list-disc pl-6 mt-1 mb-1">
                <li><strong>Inorganic:</strong> GaAs, CdS, CdSe, InP</li>
                <li><strong>Organic:</strong> Anthracene, doped pthalocyanines</li>
                <li><strong>Polymers:</strong> Polypyrrole, polyaniline, polythiophene</li>
              </ul>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">By Doping</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Intrinsic Semiconductors:</strong> Pure semiconductors without added impurities</li>
              <li><strong>Extrinsic Semiconductors:</strong> Doped with impurities to modify properties</li>
              <ul className="list-disc pl-6 mt-1">
                <li><strong>n-type:</strong> Doped with donor impurities (electrons as majority carriers)</li>
                <li><strong>p-type:</strong> Doped with acceptor impurities (holes as majority carriers)</li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Applications Based on Classification</h3>
        <p className="mb-4">
          The electrical properties of different materials determine their applications in electronic devices:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Metals:</strong> Used for wires, connectors, and conductive paths in circuits due to their high conductivity.</li>
          <li><strong>Semiconductors:</strong> Used for active components like diodes, transistors, and integrated circuits due to their controllable conductivity.</li>
          <li><strong>Insulators:</strong> Used for protective coverings, circuit board substrates, and capacitor dielectrics to prevent unwanted current flow.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">Which of the following statements is true about semiconductors?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">They have higher conductivity than metals</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">Their conductivity decreases with increasing temperature</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">They have a small energy gap between valence and conduction bands</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">They cannot be modified by adding impurities</label>
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
          <li>Materials are classified as metals, semiconductors, or insulators based on their electrical conductivity.</li>
          <li>Metals have high conductivity (10<sup>2</sup> - 10<sup>8</sup> S/m) due to overlapping energy bands.</li>
          <li>Semiconductors have intermediate conductivity (10<sup>-6</sup> - 10<sup>5</sup> S/m) with a small energy gap.</li>
          <li>Insulators have very low conductivity (10<sup>-19</sup> - 10<sup>-11</sup> S/m) with a large energy gap.</li>
          <li>Semiconductors can be elemental (Si, Ge) or compound (GaAs, CdS), and can be further classified as intrinsic or extrinsic.</li>
          <li>The unique properties of semiconductors, especially their controllable conductivity through doping, make them essential for modern electronics.</li>
        </ul>
      </section>
    </div>
  );
}

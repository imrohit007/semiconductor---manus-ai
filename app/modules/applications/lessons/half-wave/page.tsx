'use client';

import React from 'react';
import RectifierCircuit from '@/components/visualizations/RectifierCircuit';

export default function RectifierLesson() {
  const [rectifierType, setRectifierType] = React.useState<'half-wave' | 'full-wave'>('half-wave');
  const [withCapacitor, setWithCapacitor] = React.useState(false);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Diode Rectifier Circuits</h2>
        <p className="mb-4">
          One of the most important applications of semiconductor diodes is in rectifier circuits, which convert alternating current (AC) to direct current (DC). This conversion is essential for powering electronic devices that require DC voltage from AC mains supply.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            Rectification is the process of converting AC voltage (which changes direction periodically) to DC voltage (which flows in only one direction). Semiconductor diodes are ideal for this purpose because they conduct current primarily in one direction.
          </p>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: Rectifier Circuits</h3>
        <p className="mb-6">
          Explore how rectifier circuits convert AC to DC. Compare half-wave and full-wave rectifiers, and see how adding a capacitor filter smooths the output voltage.
        </p>
        
        <div className="flex flex-col items-center mb-6">
          <RectifierCircuit 
            type={rectifierType} 
            withCapacitor={withCapacitor} 
            width={500} 
            height={400} 
          />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setRectifierType('half-wave')}
              className={`px-4 py-2 rounded-md transition-colors ${
                rectifierType === 'half-wave' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Half-Wave
            </button>
            <button 
              onClick={() => setRectifierType('full-wave')}
              className={`px-4 py-2 rounded-md transition-colors ${
                rectifierType === 'full-wave' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Full-Wave
            </button>
          </div>
          
          <div className="flex items-center justify-center">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={withCapacitor} 
                onChange={() => setWithCapacitor(!withCapacitor)} 
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-700">Add Capacitor Filter</span>
            </label>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Half-Wave Rectifier:</strong> Converts only positive half-cycles of AC to DC, resulting in pulsating DC.</li>
            <li><strong>Full-Wave Rectifier:</strong> Converts both positive and negative half-cycles to DC, resulting in more efficient conversion.</li>
            <li><strong>Capacitor Filter:</strong> Smooths the pulsating DC by charging during voltage peaks and discharging during valleys.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Half-Wave Rectifier</h3>
        <p className="mb-4">
          A half-wave rectifier is the simplest form of rectifier circuit, consisting of a single diode.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Operation:</strong> During the positive half-cycle of AC input, the diode is forward biased and conducts current. During the negative half-cycle, the diode is reverse biased and blocks current.</li>
          <li><strong>Output:</strong> The output is a pulsating DC voltage that appears only during the positive half-cycles of the input AC.</li>
          <li><strong>Efficiency:</strong> Low efficiency (around 40.6%) because only half of the input power is utilized.</li>
          <li><strong>Frequency:</strong> The output frequency is the same as the input frequency (e.g., 50 Hz input produces 50 Hz output).</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Full-Wave Rectifier</h3>
        <p className="mb-4">
          A full-wave rectifier converts both positive and negative half-cycles of the AC input to DC. The center-tapped transformer method uses two diodes.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Operation:</strong> During the positive half-cycle, one diode conducts; during the negative half-cycle, the other diode conducts. This ensures current always flows in the same direction through the load.</li>
          <li><strong>Output:</strong> The output is a pulsating DC voltage that appears during both half-cycles of the input AC.</li>
          <li><strong>Efficiency:</strong> Higher efficiency (around 81.2%) because both half-cycles are utilized.</li>
          <li><strong>Frequency:</strong> The output frequency is twice the input frequency (e.g., 50 Hz input produces 100 Hz output).</li>
        </ul>
        <p className="mb-4">
          Another type of full-wave rectifier is the bridge rectifier, which uses four diodes arranged in a bridge configuration and doesn't require a center-tapped transformer.
        </p>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Capacitor Filter</h3>
        <p className="mb-4">
          To obtain a steady DC output from the pulsating voltage of a rectifier, a filter circuit is used. The simplest filter is a capacitor connected in parallel with the load.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Operation:</strong> The capacitor charges to the peak voltage during the rising portion of the rectified waveform and discharges slowly through the load during the falling portion.</li>
          <li><strong>Ripple:</strong> The output still contains some AC variation (ripple), but it's much smaller than without the filter.</li>
          <li><strong>Time Constant:</strong> The product of capacitance (C) and load resistance (R) determines how quickly the capacitor discharges. A larger time constant results in less ripple.</li>
          <li><strong>Capacitor Size:</strong> Larger capacitors provide better filtering but may cause higher surge currents when the circuit is first powered on.</li>
        </ul>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Practical Considerations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Diode Selection</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Peak Inverse Voltage (PIV) rating must be higher than the maximum reverse voltage</li>
              <li>Current rating must be sufficient for the expected load current</li>
              <li>Fast recovery diodes may be needed for high-frequency applications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-indigo-800 mb-2">Filter Design</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Capacitor value depends on load current and acceptable ripple</li>
              <li>Multiple filter stages may be used for better smoothing</li>
              <li>LC filters provide better filtering than capacitor-only filters</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">In a half-wave rectifier, if the input frequency is 50 Hz, what is the output frequency?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">25 Hz</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">50 Hz</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">100 Hz</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">0 Hz (DC)</label>
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
          <li>Rectifiers convert AC to DC using semiconductor diodes.</li>
          <li>Half-wave rectifiers use a single diode and convert only positive half-cycles to DC.</li>
          <li>Full-wave rectifiers convert both positive and negative half-cycles to DC, providing more efficient conversion.</li>
          <li>Capacitor filters smooth the pulsating DC output by charging during peaks and discharging during valleys.</li>
          <li>The output frequency of a half-wave rectifier equals the input frequency, while a full-wave rectifier doubles the frequency.</li>
          <li>Practical rectifier circuits must consider diode ratings, filter design, and load requirements.</li>
        </ul>
      </section>
    </div>
  );
}

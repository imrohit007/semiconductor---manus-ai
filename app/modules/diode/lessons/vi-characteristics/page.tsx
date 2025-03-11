'use client';

import React from 'react';
import DiodeCharacteristicsCurve from '@/components/visualizations/DiodeCharacteristicsCurve';

export default function DiodeCharacteristicsLesson() {
  const [diodeType, setDiodeType] = React.useState<'silicon' | 'germanium'>('silicon');

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Semiconductor Diode Characteristics</h2>
        <p className="mb-4">
          A semiconductor diode is a two-terminal electronic component that allows current to flow in one direction while blocking it in the opposite direction. This behavior is characterized by its voltage-current (V-I) relationship.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-700">
            The V-I characteristic curve of a diode shows how current through the diode varies with the voltage applied across it. This non-linear relationship is fundamental to understanding diode behavior in circuits.
          </p>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-indigo-700 mb-4">Interactive Visualization: Diode V-I Characteristics</h3>
        <p className="mb-6">
          Explore how current varies with voltage in a semiconductor diode. Use the slider to change the applied voltage and observe the resulting current. Compare the characteristics of silicon and germanium diodes.
        </p>
        
        <div className="flex flex-col items-center mb-6">
          <DiodeCharacteristicsCurve diodeType={diodeType} width={500} height={300} />
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setDiodeType('silicon')}
            className={`px-4 py-2 rounded-md transition-colors ${
              diodeType === 'silicon' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Silicon Diode
          </button>
          <button 
            onClick={() => setDiodeType('germanium')}
            className={`px-4 py-2 rounded-md transition-colors ${
              diodeType === 'germanium' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Germanium Diode
          </button>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-2">Key Observations:</h4>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li><strong>Forward Bias:</strong> Current increases exponentially after the threshold voltage.</li>
            <li><strong>Threshold Voltage:</strong> Silicon diodes have a higher threshold (~0.7V) than germanium diodes (~0.3V).</li>
            <li><strong>Reverse Bias:</strong> Very small current flows (reverse saturation current).</li>
            <li><strong>Breakdown:</strong> At high reverse voltages, current suddenly increases (not shown in this simulation).</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Forward Bias Characteristics</h3>
        <p className="mb-4">
          When a diode is forward biased (p-side connected to positive terminal and n-side to negative terminal):
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Initially, very little current flows as the applied voltage is less than the threshold voltage.</li>
          <li>Once the applied voltage exceeds the threshold voltage (0.7V for silicon, 0.3V for germanium), the current increases exponentially.</li>
          <li>The threshold voltage is the minimum voltage required to overcome the barrier potential and allow significant current flow.</li>
          <li>The diode equation describes this behavior: I = I₀(e^(qV/nkT) - 1), where I₀ is the reverse saturation current.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Reverse Bias Characteristics</h3>
        <p className="mb-4">
          When a diode is reverse biased (p-side connected to negative terminal and n-side to positive terminal):
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>A very small current flows, known as the reverse saturation current (typically in microamperes).</li>
          <li>This current is almost independent of the applied voltage.</li>
          <li>The reverse current is due to minority carriers (electrons in p-region and holes in n-region).</li>
          <li>At high reverse voltages, the diode may enter breakdown, where current increases rapidly.</li>
        </ul>
      </section>
      
      <section className="bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Dynamic Resistance</h3>
        <p className="mb-4">
          The resistance of a diode is not constant but varies with the applied voltage and current. The dynamic resistance (r<sub>d</sub>) is defined as:
        </p>
        <div className="bg-white p-4 rounded-lg text-center mb-4">
          <p className="text-lg font-medium">r<sub>d</sub> = ΔV/ΔI</p>
        </div>
        <p className="mb-4">
          Where ΔV is a small change in voltage and ΔI is the resulting change in current.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>In forward bias, the dynamic resistance is typically small (a few ohms to tens of ohms).</li>
          <li>In reverse bias, the dynamic resistance is very high (hundreds of kilohms to megohms).</li>
          <li>This non-linear resistance is what makes diodes useful for signal processing applications.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Temperature Effects</h3>
        <p className="mb-4">
          Temperature significantly affects diode characteristics:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>As temperature increases, the threshold voltage decreases (approximately -2mV/°C for silicon).</li>
          <li>The reverse saturation current approximately doubles for every 10°C increase in temperature.</li>
          <li>At high temperatures, the diode may conduct significant current in both directions, reducing its rectifying properties.</li>
        </ul>
      </section>
      
      <section>
        <h3 className="text-xl font-semibold text-indigo-700 mb-3">Knowledge Check</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="font-medium mb-4">What happens to a p-n junction diode when forward bias is applied?</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="radio" id="q1-a" name="q1" className="mr-2" />
              <label htmlFor="q1-a">The potential barrier increases</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-b" name="q1" className="mr-2" />
              <label htmlFor="q1-b">The majority carrier current becomes zero</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-c" name="q1" className="mr-2" />
              <label htmlFor="q1-c">The potential barrier decreases</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="q1-d" name="q1" className="mr-2" />
              <label htmlFor="q1-d">None of the above</label>
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
          <li>A semiconductor diode allows current to flow easily in one direction (forward bias) and blocks it in the other direction (reverse bias).</li>
          <li>The V-I characteristic curve shows the non-linear relationship between voltage and current.</li>
          <li>In forward bias, current increases exponentially once the threshold voltage is exceeded.</li>
          <li>The threshold voltage is approximately 0.7V for silicon diodes and 0.3V for germanium diodes.</li>
          <li>In reverse bias, only a small reverse saturation current flows.</li>
          <li>The dynamic resistance of a diode varies with the applied voltage and current.</li>
          <li>Temperature affects both the threshold voltage and the reverse saturation current.</li>
        </ul>
      </section>
    </div>
  );
}

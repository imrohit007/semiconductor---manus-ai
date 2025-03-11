'use client';

import React, { useState } from 'react';
// Remove unused import

type VirtualExperimentProps = {
  experimentType: 'diode-circuit' | 'temperature-effect' | 'doping-concentration';
  width?: number;
  height?: number;
};

export default function VirtualExperiment({
  experimentType,
  width = 600,
  height = 500
}: VirtualExperimentProps) {
  // State for diode circuit experiment
  const [voltage, setVoltage] = useState(0);
  const [diodeType, setDiodeType] = useState<'silicon' | 'germanium'>('silicon');
  
  // State for temperature effect experiment
  const [temperature, setTemperature] = useState(300);
  
  // State for doping concentration experiment
  const [dopingConcentration, setDopingConcentration] = useState(5);
  const [dopingType, setDopingType] = useState<'n-type' | 'p-type'>('n-type');
  
  // Render appropriate experiment based on type
  const renderExperiment = () => {
    switch (experimentType) {
      case 'diode-circuit':
        return renderDiodeCircuit();
      case 'temperature-effect':
        return renderTemperatureEffect();
      case 'doping-concentration':
        return renderDopingConcentration();
      default:
        return <div>Unknown experiment type</div>;
    }
  };
  
  // Diode Circuit Experiment
  const renderDiodeCircuit = () => {
    // Calculate current based on diode equation
    const calculateCurrent = () => {
      const thresholdVoltage = diodeType === 'silicon' ? 0.7 : 0.3;
      
      if (voltage < 0) {
        return -0.001; // Reverse saturation current
      } else if (voltage < thresholdVoltage) {
        return 0.01 * voltage / thresholdVoltage; // Below threshold
      } else {
        return 0.01 + Math.exp(5 * (voltage - thresholdVoltage)) * 0.1; // Forward bias
      }
    };
    
    const current = calculateCurrent();
    const bulbBrightness = Math.min(1, Math.max(0, current * 10));
    
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden">
          {/* Circuit diagram */}
          <svg width={width} height={height - 150} className="mx-auto">
            {/* Battery */}
            <rect x={100} y={200} width={30} height={60} fill="#6B7280" />
            <text x={115} y={230} textAnchor="middle" className="text-white font-bold">+</text>
            <text x={115} y={190} textAnchor="middle" className="text-sm fill-gray-700">{voltage.toFixed(1)}V</text>
            
            {/* Wires */}
            <line x1={130} y1={230} x2={200} y2={230} stroke="#374151" strokeWidth={3} />
            <line x1={300} y1={230} x2={370} y2={230} stroke="#374151" strokeWidth={3} />
            <line x1={470} y1={230} x2={500} y2={230} stroke="#374151" strokeWidth={3} />
            <line x1={500} y1={230} x2={500} y2={100} stroke="#374151" strokeWidth={3} />
            <line x1={500} y1={100} x2={100} y2={100} stroke="#374151" strokeWidth={3} />
            <line x1={100} y1={100} x2={100} y2={200} stroke="#374151" strokeWidth={3} />
            
            {/* Diode */}
            <line x1={200} y1={230} x2={240} y2={230} stroke="#374151" strokeWidth={3} />
            <polygon points="240,230 270,210 270,250" fill="#3B82F6" />
            <line x1={270} y1={210} x2={270} y2={250} stroke="#3B82F6" strokeWidth={3} />
            <line x1={270} y1={230} x2={300} y2={230} stroke="#374151" strokeWidth={3} />
            <text x={250} y={190} textAnchor="middle" className="text-sm fill-gray-700">{diodeType === 'silicon' ? 'Si' : 'Ge'} Diode</text>
            
            {/* Resistor */}
            <line x1={370} y1={230} x2={380} y2={230} stroke="#374151" strokeWidth={3} />
            <path d="M 380,230 L 390,215 L 400,245 L 410,215 L 420,245 L 430,215 L 440,245 L 450,230" 
                  stroke="#10B981" strokeWidth={3} fill="none" />
            <line x1={450} y1={230} x2={470} y2={230} stroke="#374151" strokeWidth={3} />
            <text x={420} y={190} textAnchor="middle" className="text-sm fill-gray-700">100Ω</text>
            
            {/* Light bulb */}
            <circle cx={420} cy={100} r={30} fill={`rgba(255, 200, 0, ${bulbBrightness})`} stroke="#374151" strokeWidth={2} />
            <text x={420} y={105} textAnchor="middle" className="text-sm fill-gray-700">Bulb</text>
            
            {/* Current indicator */}
            <text x={350} y={260} textAnchor="middle" className="text-sm fill-gray-700">
              Current: {(current * 1000).toFixed(2)} mA
            </text>
            
            {/* Diode state */}
            <text x={250} y={260} textAnchor="middle" className="text-sm fill-gray-700">
              Diode: {voltage < 0 ? 'Reverse Biased' : 
                     voltage < (diodeType === 'silicon' ? 0.7 : 0.3) ? 'Below Threshold' : 
                     'Forward Biased'}
            </text>
          </svg>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voltage: {voltage.toFixed(1)} V
            </label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={voltage}
              onChange={(e) => setVoltage(parseFloat(e.target.value))}
              className="w-full"
            />
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
        </div>
      </div>
    );
  };
  
  // Temperature Effect Experiment
  const renderTemperatureEffect = () => {
    // Calculate intrinsic carrier concentration based on temperature
    const calculateCarrierConcentration = () => {
      // Simplified model: ni ∝ T^(3/2) * e^(-Eg/2kT)
      // For silicon: Eg = 1.12 eV, k = 8.62e-5 eV/K
      const Eg = 1.12; // eV
      const k = 8.62e-5; // eV/K
      
      // Reference: ni ≈ 1.5 × 10^10 cm^-3 at 300K for silicon
      const ni300K = 1.5e10;
      
      // Calculate ni at given temperature
      const ni = ni300K * Math.pow(temperature/300, 1.5) * 
                Math.exp(-(Eg/(2*k)) * (1/temperature - 1/300));
      
      return ni;
    };
    
    // Calculate conductivity
    const calculateConductivity = () => {
      const ni = calculateCarrierConcentration();
      // Simplified model: σ ∝ ni
      // Reference: σ ≈ 5 × 10^-6 S/m at 300K for intrinsic silicon
      const sigma300K = 5e-6;
      return sigma300K * (ni / 1.5e10);
    };
    
    const carrierConcentration = calculateCarrierConcentration();
    const conductivity = calculateConductivity();
    
    // Logarithmic scale for visualization
    const logCarrierConcentration = Math.log10(carrierConcentration);
    const carrierHeight = (logCarrierConcentration - 10) * 20; // Scale for visualization
    
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden">
          <svg width={width} height={height - 150} className="mx-auto">
            {/* Temperature visualization */}
            <rect x={100} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={100} 
              y={350 - Math.min(300, (temperature - 100) * 0.75)} 
              width={100} 
              height={Math.min(300, (temperature - 100) * 0.75)} 
              fill="#EF4444" 
            />
            <text x={150} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">Temperature</text>
            <text x={150} y={370} textAnchor="middle" className="text-sm fill-gray-700">{temperature}K</text>
            
            {/* Carrier concentration visualization */}
            <rect x={250} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={250} 
              y={350 - Math.min(300, carrierHeight)} 
              width={100} 
              height={Math.min(300, carrierHeight)} 
              fill="#3B82F6" 
            />
            <text x={300} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">Carrier Concentration</text>
            <text x={300} y={370} textAnchor="middle" className="text-sm fill-gray-700">{carrierConcentration.toExponential(2)} cm⁻³</text>
            
            {/* Conductivity visualization */}
            <rect x={400} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={400} 
              y={350 - Math.min(300, carrierHeight)} 
              width={100} 
              height={Math.min(300, carrierHeight)} 
              fill="#10B981" 
            />
            <text x={450} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">Conductivity</text>
            <text x={450} y={370} textAnchor="middle" className="text-sm fill-gray-700">{conductivity.toExponential(2)} S/m</text>
          </svg>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Temperature: {temperature} K
            </label>
            <input
              type="range"
              min="100"
              max="500"
              step="10"
              value={temperature}
              onChange={(e) => setTemperature(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="text-sm text-gray-600">
            <p>Observe how temperature affects the intrinsic carrier concentration and conductivity of silicon.</p>
            <p>At higher temperatures, more electron-hole pairs are thermally generated, increasing conductivity.</p>
          </div>
        </div>
      </div>
    );
  };
  
  // Doping Concentration Experiment
  const renderDopingConcentration = () => {
    // Calculate carrier concentrations based on doping
    const calculateCarrierConcentrations = () => {
      // Intrinsic carrier concentration at 300K
      const ni = 1.5e10; // cm^-3
      
      // Doping concentration (scaled from 1 to 10)
      const Nd = dopingType === 'n-type' ? Math.pow(10, dopingConcentration + 10) : 0;
      const Na = dopingType === 'p-type' ? Math.pow(10, dopingConcentration + 10) : 0;
      
      // Calculate electron and hole concentrations
      let ne, nh;
      
      if (dopingType === 'n-type') {
        ne = Nd;
        nh = ni * ni / ne;
      } else {
        nh = Na;
        ne = ni * ni / nh;
      }
      
      return { ne, nh };
    };
    
    const { ne, nh } = calculateCarrierConcentrations();
    
    // Logarithmic scale for visualization
    const logNe = Math.log10(ne);
    const logNh = Math.log10(nh);
    const electronHeight = (logNe - 10) * 15; // Scale for visualization
    const holeHeight = (logNh - 10) * 15; // Scale for visualization
    
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 relative bg-gray-100 rounded-lg overflow-hidden">
          <svg width={width} height={height - 150} className="mx-auto">
            {/* Doping visualization */}
            <rect x={100} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={100} 
              y={350 - Math.min(300, dopingConcentration * 30)} 
              width={100} 
              height={Math.min(300, dopingConcentration * 30)} 
              fill={dopingType === 'n-type' ? '#10B981' : '#8B5CF6'} 
            />
            <text x={150} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">
              Doping Concentration
            </text>
            <text x={150} y={370} textAnchor="middle" className="text-sm fill-gray-700">
              {Math.pow(10, dopingConcentration + 10).toExponential(2)} cm⁻³
            </text>
            
            {/* Electron concentration visualization */}
            <rect x={250} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={250} 
              y={350 - Math.min(300, electronHeight)} 
              width={100} 
              height={Math.min(300, electronHeight)} 
              fill="#3B82F6" 
            />
            <text x={300} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">Electron Concentration</text>
            <text x={300} y={370} textAnchor="middle" className="text-sm fill-gray-700">{ne.toExponential(2)} cm⁻³</text>
            
            {/* Hole concentration visualization */}
            <rect x={400} y={50} width={100} height={300} fill="#F3F4F6" stroke="#D1D5DB" />
            <rect 
              x={400} 
              y={350 - Math.min(300, holeHeight)} 
              width={100} 
              height={Math.min(300, holeHeight)} 
              fill="#EC4899" 
            />
            <text x={450} y={30} textAnchor="middle" className="text-sm font-medium fill-gray-700">Hole Concentration</text>
            <text x={450} y={370} textAnchor="middle" className="text-sm fill-gray-700">{nh.toExponential(2)} cm⁻³</text>
          </svg>
        </div>
        
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Doping Concentration: {Math.pow(10, dopingConcentration + 10).toExponential(2)} cm⁻³
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={dopingConcentration}
              onChange={(e) => setDopingConcentration(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={() => setDopingType('n-type')}
              className={`px-4 py-2 rounded-md transition-colors ${
                dopingType === 'n-type'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              N-Type (Donor)
            </button>
            <button
              onClick={() => setDopingType('p-type')}
              className={`px-4 py-2 rounded-md transition-colors ${
                dopingType === 'p-type'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              P-Type (Acceptor)
            </button>
          </div>
          
          <div className="text-sm text-gray-600">
            <p>Observe how doping type and concentration affect carrier concentrations.</p>
            <p>Remember: n<sub>e</sub> × n<sub>h</sub> = n<sub>i</sub>² always holds true.</p>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="h-full">
      {renderExperiment()}
    </div>
  );
}

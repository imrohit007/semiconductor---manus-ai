'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type IntrinsicSemiconductorAnimationProps = {
  width?: number;
  height?: number;
  temperature?: number;
  interactive?: boolean;
};

export default function IntrinsicSemiconductorAnimation({
  width = 500,
  height = 400,
  temperature: initialTemperature = 300,
  interactive = true
}: IntrinsicSemiconductorAnimationProps) {
  const [temperature, setTemperature] = useState(initialTemperature);
  
  // Colors
  const siliconColor = '#94A3B8'; // slate-400
  const electronColor = '#3B82F6'; // blue-500
  const holeColor = '#EC4899'; // pink-500
  const bondColor = '#CBD5E1'; // slate-300
  
  // Grid settings
  const gridSize = 5;
  const atomRadius = 15;
  const gridSpacing = Math.min(width, height) / (gridSize + 1);
  
  // Generate silicon atoms in a grid
  const generateSiliconGrid = () => {
    const atoms = [];
    
    for (let row = 1; row <= gridSize; row++) {
      for (let col = 1; col <= gridSize; col++) {
        const x = col * gridSpacing;
        const y = row * gridSpacing;
        
        atoms.push({
          id: `atom-${row}-${col}`,
          x,
          y
        });
      }
    }
    
    return atoms;
  };
  
  // Generate electron-hole pairs based on temperature
  const generateCarriers = () => {
    const pairs = [];
    
    // Base number of pairs (increases with temperature)
    const tempFactor = Math.max(0, Math.min(1, (temperature - 100) / 400));
    const pairCount = Math.floor(tempFactor * 5) + 1;
    
    // Create electron-hole pairs
    for (let i = 0; i < pairCount; i++) {
      // Random position for the pair
      const row = Math.floor(Math.random() * gridSize) + 1;
      const col = Math.floor(Math.random() * gridSize) + 1;
      const x = col * gridSpacing;
      const y = row * gridSpacing;
      
      // Add some randomness to position
      const offsetX = (Math.random() - 0.5) * gridSpacing * 0.5;
      const offsetY = (Math.random() - 0.5) * gridSpacing * 0.5;
      
      pairs.push({
        id: `pair-${i}`,
        electron: {
          id: `e-${i}`,
          x: x + offsetX,
          y: y + offsetY - 15
        },
        hole: {
          id: `h-${i}`,
          x: x + offsetX,
          y: y + offsetY + 15
        }
      });
    }
    
    return pairs;
  };
  
  const atoms = generateSiliconGrid();
  const carrierPairs = generateCarriers();
  
  // Handle temperature change
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseInt(e.target.value));
  };
  
  // Animation variants
  const electronVariants = {
    animate: (i: number) => ({
      x: [0, 10, -10, 5, -5, 0],
      y: [0, -5, 5, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.2
      }
    })
  };
  
  const holeVariants = {
    animate: (i: number) => ({
      x: [0, -8, 8, -4, 4, 0],
      y: [0, 6, -6, -8, 8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.2
      }
    })
  };
  
  // Calculate temperature-dependent band gap
  const getBandGapText = () => {
    // Silicon band gap decreases slightly with temperature
    const bandGap = 1.12 - 0.0002 * (temperature - 300);
    return bandGap.toFixed(2);
  };
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* Silicon crystal lattice */}
        {atoms.map((atom, index) => (
          <g key={atom.id}>
            {/* Horizontal bonds */}
            {atom.x < gridSize * gridSpacing && (
              <line
                x1={atom.x + atomRadius}
                y1={atom.y}
                x2={atom.x + gridSpacing - atomRadius}
                y2={atom.y}
                stroke={bondColor}
                strokeWidth="2"
              />
            )}
            
            {/* Vertical bonds */}
            {atom.y < gridSize * gridSpacing && (
              <line
                x1={atom.x}
                y1={atom.y + atomRadius}
                x2={atom.x}
                y2={atom.y + gridSpacing - atomRadius}
                stroke={bondColor}
                strokeWidth="2"
              />
            )}
            
            {/* Silicon atom */}
            <circle
              cx={atom.x}
              cy={atom.y}
              r={atomRadius}
              fill={siliconColor}
              stroke="#475569"
              strokeWidth="1"
            />
            
            {/* Atom label */}
            <text
              x={atom.x}
              y={atom.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-bold fill-white"
            >
              Si
            </text>
          </g>
        ))}
        
        {/* Electron-hole pairs */}
        {carrierPairs.map((pair, index) => (
          <g key={pair.id}>
            {/* Electron */}
            <motion.circle
              key={pair.electron.id}
              cx={pair.electron.x}
              cy={pair.electron.y}
              r="8"
              fill={electronColor}
              variants={electronVariants}
              animate="animate"
              custom={index}
            />
            
            {/* Hole */}
            <motion.circle
              key={pair.hole.id}
              cx={pair.hole.x}
              cy={pair.hole.y}
              r="8"
              stroke={holeColor}
              strokeWidth="2"
              fill="none"
              variants={holeVariants}
              animate="animate"
              custom={index}
            />
          </g>
        ))}
        
        {/* Energy band diagram (simplified) */}
        <g transform={`translate(${width - 120}, 20)`}>
          <rect x="0" y="0" width="100" height="30" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" />
          <text x="50" y="15" textAnchor="middle" dominantBaseline="middle" className="text-xs fill-gray-700">Conduction Band</text>
          
          <rect x="0" y="60" width="100" height="30" fill="#10B981" fillOpacity="0.2" stroke="#10B981" />
          <text x="50" y="75" textAnchor="middle" dominantBaseline="middle" className="text-xs fill-gray-700">Valence Band</text>
          
          <text x="50" y="45" textAnchor="middle" dominantBaseline="middle" className="text-xs fill-gray-700">
            Eg = {getBandGapText()} eV
          </text>
        </g>
        
        {/* Legend */}
        <g transform={`translate(20, ${height - 80})`}>
          <circle cx="10" cy="10" r="8" fill={electronColor} />
          <text x="25" y="14" className="text-xs fill-gray-700">Electron</text>
          
          <circle cx="10" cy="35" r="8" stroke={holeColor} strokeWidth="2" fill="none" />
          <text x="25" y="39" className="text-xs fill-gray-700">Hole</text>
        </g>
      </svg>
      
      {interactive && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>100K</span>
            <span>Temperature: {temperature}K</span>
            <span>500K</span>
          </div>
          <input 
            type="range" 
            min="100" 
            max="500" 
            step="10" 
            value={temperature} 
            onChange={handleTemperatureChange}
            className="w-full"
          />
          <div className="mt-2 text-center">
            <span className="text-sm font-medium">
              {temperature < 200 ? 'Low temperature: Few electron-hole pairs' : 
               temperature < 350 ? 'Room temperature: Normal thermal generation' : 
               'High temperature: Increased thermal generation'}
            </span>
          </div>
        </div>
      )}
      
      <div className="mt-2 text-center text-sm text-gray-700">
        <p className="font-medium">
          Intrinsic Silicon Semiconductor
        </p>
        <p className="mt-1 text-xs">
          Thermal energy creates electron-hole pairs. The number of pairs increases with temperature.
        </p>
      </div>
    </div>
  );
}

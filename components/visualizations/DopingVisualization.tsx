'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type DopingVisualizationProps = {
  type: 'n-type' | 'p-type';
  width?: number;
  height?: number;
  interactive?: boolean;
};

export default function DopingVisualization({
  type = 'n-type',
  width = 500,
  height = 400,
  interactive = true
}: DopingVisualizationProps) {
  const [temperature, setTemperature] = useState(300); // Kelvin
  
  // Colors
  const siliconColor = '#94A3B8'; // slate-400
  const electronColor = '#3B82F6'; // blue-500
  const holeColor = '#EC4899'; // pink-500
  const donorColor = '#10B981'; // emerald-500
  const acceptorColor = '#8B5CF6'; // violet-500
  
  // Grid settings
  const gridSize = 6;
  const atomRadius = 15;
  const gridSpacing = Math.min(width, height) / (gridSize + 1);
  
  // Generate silicon atoms in a grid
  const generateSiliconGrid = () => {
    const atoms = [];
    
    for (let row = 1; row <= gridSize; row++) {
      for (let col = 1; col <= gridSize; col++) {
        const x = col * gridSpacing;
        const y = row * gridSpacing;
        
        // Center atom is the dopant
        const isDopant = row === 3 && col === 3;
        
        atoms.push({
          id: `atom-${row}-${col}`,
          x,
          y,
          type: isDopant ? (type === 'n-type' ? 'donor' : 'acceptor') : 'silicon'
        });
      }
    }
    
    return atoms;
  };
  
  // Generate electrons and holes based on temperature and doping
  const generateChargeCarriers = () => {
    const electrons = [];
    const holes = [];
    
    // Base number of carriers (increases with temperature)
    const tempFactor = Math.max(0, Math.min(1, (temperature - 100) / 400));
    const intrinsicCarriers = Math.floor(tempFactor * 4);
    
    // Add intrinsic carriers (electron-hole pairs)
    for (let i = 0; i < intrinsicCarriers; i++) {
      const x = (1 + Math.random() * gridSize) * gridSpacing;
      const y = (1 + Math.random() * gridSize) * gridSpacing;
      
      electrons.push({
        id: `e-intrinsic-${i}`,
        x,
        y,
        type: 'intrinsic'
      });
      
      holes.push({
        id: `h-intrinsic-${i}`,
        x: (1 + Math.random() * gridSize) * gridSpacing,
        y: (1 + Math.random() * gridSize) * gridSpacing,
        type: 'intrinsic'
      });
    }
    
    // Add extrinsic carriers based on doping type
    if (type === 'n-type') {
      // Add donor electron (always present)
      electrons.push({
        id: 'e-donor',
        x: 3 * gridSpacing + (Math.random() * 30 - 15),
        y: 3 * gridSpacing + (Math.random() * 30 - 15),
        type: 'extrinsic'
      });
    } else {
      // Add acceptor hole (always present)
      holes.push({
        id: 'h-acceptor',
        x: 3 * gridSpacing + (Math.random() * 30 - 15),
        y: 3 * gridSpacing + (Math.random() * 30 - 15),
        type: 'extrinsic'
      });
    }
    
    return { electrons, holes };
  };
  
  const atoms = generateSiliconGrid();
  const { electrons, holes } = generateChargeCarriers();
  
  // Handle temperature change
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseInt(e.target.value));
  };
  
  // Animation variants
  const electronVariants = {
    animate: {
      x: [0, 10, -10, 5, -5, 0],
      y: [0, -5, 5, 10, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };
  
  const holeVariants = {
    animate: {
      x: [0, -8, 8, -4, 4, 0],
      y: [0, 6, -6, -8, 8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* Silicon atoms */}
        {atoms.map((atom) => (
          <g key={atom.id}>
            {/* Covalent bonds */}
            {atom.type === 'silicon' && (
              <>
                {/* Horizontal bonds */}
                {atom.x < gridSize * gridSpacing && (
                  <line
                    x1={atom.x + atomRadius}
                    y1={atom.y}
                    x2={atom.x + gridSpacing - atomRadius}
                    y2={atom.y}
                    stroke="#CBD5E1"
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
                    stroke="#CBD5E1"
                    strokeWidth="2"
                  />
                )}
              </>
            )}
            
            {/* Atom circle */}
            <circle
              cx={atom.x}
              cy={atom.y}
              r={atomRadius}
              fill={
                atom.type === 'donor' 
                  ? donorColor 
                  : atom.type === 'acceptor' 
                    ? acceptorColor 
                    : siliconColor
              }
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
              {atom.type === 'donor' 
                ? 'P' 
                : atom.type === 'acceptor' 
                  ? 'B' 
                  : 'Si'}
            </text>
            
            {/* Valence electrons for donor */}
            {atom.type === 'donor' && (
              <text
                x={atom.x + atomRadius + 5}
                y={atom.y - atomRadius - 5}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-blue-600"
              >
                5e⁻
              </text>
            )}
            
            {/* Valence electrons for acceptor */}
            {atom.type === 'acceptor' && (
              <text
                x={atom.x + atomRadius + 5}
                y={atom.y - atomRadius - 5}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-bold fill-violet-600"
              >
                3e⁻
              </text>
            )}
          </g>
        ))}
        
        {/* Free electrons */}
        {electrons.map((electron) => (
          <motion.circle
            key={electron.id}
            cx={electron.x}
            cy={electron.y}
            r="8"
            fill={electronColor}
            variants={electronVariants}
            animate="animate"
            custom={electron.id}
          />
        ))}
        
        {/* Holes */}
        {holes.map((hole) => (
          <motion.circle
            key={hole.id}
            cx={hole.x}
            cy={hole.y}
            r="8"
            stroke={holeColor}
            strokeWidth="2"
            fill="none"
            variants={holeVariants}
            animate="animate"
            custom={hole.id}
          />
        ))}
        
        {/* Legend */}
        <g transform={`translate(${width - 120}, 20)`}>
          <circle cx="10" cy="10" r="8" fill={electronColor} />
          <text x="25" y="14" className="text-xs fill-gray-700">Electron</text>
          
          <circle cx="10" cy="35" r="8" stroke={holeColor} strokeWidth="2" fill="none" />
          <text x="25" y="39" className="text-xs fill-gray-700">Hole</text>
          
          <circle cx="10" cy="60" r={atomRadius} fill={siliconColor} stroke="#475569" strokeWidth="1" />
          <text x="25" y="64" className="text-xs fill-gray-700">Silicon</text>
          
          {type === 'n-type' ? (
            <circle cx="10" cy="85" r={atomRadius} fill={donorColor} stroke="#475569" strokeWidth="1" />
          ) : (
            <circle cx="10" cy="85" r={atomRadius} fill={acceptorColor} stroke="#475569" strokeWidth="1" />
          )}
          <text x="25" y="89" className="text-xs fill-gray-700">
            {type === 'n-type' ? 'Donor (P)' : 'Acceptor (B)'}
          </text>
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
              {temperature < 200 ? 'Low temperature: Few charge carriers' : 
               temperature < 350 ? 'Room temperature: Normal operation' : 
               'High temperature: Increased thermal generation'}
            </span>
          </div>
        </div>
      )}
      
      <div className="mt-2 text-center text-sm text-gray-700">
        <p className="font-medium">
          {type === 'n-type' ? 'N-Type Semiconductor (Phosphorus-doped Silicon)' : 'P-Type Semiconductor (Boron-doped Silicon)'}
        </p>
        <p className="mt-1 text-xs">
          {type === 'n-type' 
            ? 'Pentavalent dopant provides extra electrons as majority carriers' 
            : 'Trivalent dopant creates holes as majority carriers'}
        </p>
      </div>
    </div>
  );
}

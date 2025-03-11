'use client';

import React from 'react';
import { motion } from 'framer-motion';

type EnergyBandDiagramProps = {
  type: 'metal' | 'semiconductor' | 'insulator';
  temperature?: 'low' | 'high';
  width?: number;
  height?: number;
};

export default function EnergyBandDiagram({ 
  type, 
  temperature = 'low', 
  width = 400, 
  height = 300 
}: EnergyBandDiagramProps) {
  // Define colors
  const conductionBandColor = '#4F46E5'; // indigo-600
  const valenceBandColor = '#10B981'; // emerald-500
  const electronColor = '#3B82F6'; // blue-500
  const holeColor = '#F43F5E'; // rose-500
  
  // Define band gap sizes based on material type
  const getBandGap = () => {
    switch (type) {
      case 'metal':
        return 0; // No band gap for metals
      case 'semiconductor':
        return height * 0.2; // 20% of height
      case 'insulator':
        return height * 0.4; // 40% of height
      default:
        return height * 0.2;
    }
  };
  
  const bandGap = getBandGap();
  const bandHeight = (height - bandGap) / 2;
  
  // Generate electrons and holes based on temperature and material type
  const getParticles = () => {
    if (temperature === 'low' || type === 'insulator') {
      return {
        conductionElectrons: [],
        valenceElectrons: Array.from({ length: 10 }, (_, i) => ({
          id: `ve-${i}`,
          x: (width / 10) * i + (width / 20),
          y: height - bandHeight / 2,
        })),
        holes: [],
      };
    } else {
      // For high temperature or metals
      const numExcitedElectrons = type === 'metal' ? 5 : 2;
      
      return {
        conductionElectrons: Array.from({ length: numExcitedElectrons }, (_, i) => ({
          id: `ce-${i}`,
          x: (width / (numExcitedElectrons + 1)) * (i + 1),
          y: bandHeight / 2,
        })),
        valenceElectrons: Array.from({ length: 10 - numExcitedElectrons }, (_, i) => ({
          id: `ve-${i}`,
          x: (width / (10 - numExcitedElectrons + 1)) * (i + 1),
          y: height - bandHeight / 2,
        })),
        holes: Array.from({ length: numExcitedElectrons }, (_, i) => ({
          id: `h-${i}`,
          x: (width / (numExcitedElectrons + 1)) * (i + 1),
          y: height - bandHeight / 2,
        })),
      };
    }
  };
  
  const { conductionElectrons, valenceElectrons, holes } = getParticles();
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* Energy level labels */}
        <text x="10" y="20" className="text-xs font-medium fill-gray-700">EC (Conduction Band)</text>
        <text x="10" y={height - 10} className="text-xs font-medium fill-gray-700">EV (Valence Band)</text>
        
        {/* Conduction band */}
        <rect
          x="0"
          y="0"
          width={width}
          height={bandHeight}
          fill={conductionBandColor}
          fillOpacity="0.2"
          stroke={conductionBandColor}
          strokeWidth="2"
        />
        
        {/* Valence band */}
        <rect
          x="0"
          y={height - bandHeight}
          width={width}
          height={bandHeight}
          fill={valenceBandColor}
          fillOpacity="0.2"
          stroke={valenceBandColor}
          strokeWidth="2"
        />
        
        {/* Band gap label */}
        {bandGap > 0 && (
          <text 
            x={width / 2} 
            y={bandHeight + bandGap / 2} 
            textAnchor="middle" 
            dominantBaseline="middle"
            className="text-xs font-medium fill-gray-700"
          >
            Eg = {type === 'semiconductor' ? '~1.1 eV (Si)' : '>3 eV'}
          </text>
        )}
        
        {/* Electrons in conduction band */}
        {conductionElectrons.map((electron) => (
          <motion.circle
            key={electron.id}
            cx={electron.x}
            cy={electron.y}
            r="8"
            fill={electronColor}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Electrons in valence band */}
        {valenceElectrons.map((electron) => (
          <motion.circle
            key={electron.id}
            cx={electron.x}
            cy={electron.y}
            r="8"
            fill={electronColor}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 5, -5, 0],
              y: [0, -3, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Holes in valence band */}
        {holes.map((hole) => (
          <motion.circle
            key={hole.id}
            cx={hole.x}
            cy={hole.y}
            r="8"
            stroke={holeColor}
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, -8, 8, 0],
              y: [0, 4, -4, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
      
      <div className="mt-4 text-center text-sm text-gray-700">
        <p className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} at {temperature === 'low' ? 'Low' : 'High'} Temperature</p>
        {type === 'semiconductor' && temperature === 'high' && (
          <p className="mt-1 text-xs">Thermally excited electrons create electron-hole pairs</p>
        )}
        {type === 'metal' && (
          <p className="mt-1 text-xs">Overlapping bands allow free electron movement</p>
        )}
        {type === 'insulator' && (
          <p className="mt-1 text-xs">Large band gap prevents electron excitation</p>
        )}
      </div>
    </div>
  );
}

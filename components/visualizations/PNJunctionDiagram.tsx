'use client';

import React from 'react';
import { motion } from 'framer-motion';

type PNJunctionDiagramProps = {
  biasMode: 'none' | 'forward' | 'reverse';
  width?: number;
  height?: number;
};

export default function PNJunctionDiagram({ 
  biasMode = 'none', 
  width = 500, 
  height = 300 
}: PNJunctionDiagramProps) {
  // Define colors
  const pSideColor = '#EC4899'; // pink-500
  const nSideColor = '#3B82F6'; // blue-500
  const depletionColor = '#F3F4F6'; // gray-100
  const electronColor = '#2563EB'; // blue-600
  const holeColor = '#DB2777'; // pink-600
  const batteryColor = '#6B7280'; // gray-500
  
  // Calculate dimensions
  const junctionX = width / 2;
  const depletionWidth = biasMode === 'forward' ? 20 : biasMode === 'reverse' ? 60 : 40;
  const depletionLeft = junctionX - depletionWidth / 2;
  
  // Generate charge carriers
  const generateCarriers = () => {
    const electrons = [];
    const holes = [];
    
    // Number of carriers depends on bias mode
    const electronCount = biasMode === 'forward' ? 12 : 8;
    const holeCount = biasMode === 'forward' ? 12 : 8;
    
    // Electrons in n-region
    for (let i = 0; i < electronCount; i++) {
      const x = junctionX + 20 + Math.random() * (width / 2 - 40);
      const y = 50 + Math.random() * (height - 100);
      electrons.push({ id: `e-${i}`, x, y });
    }
    
    // Holes in p-region
    for (let i = 0; i < holeCount; i++) {
      const x = 20 + Math.random() * (junctionX - 40);
      const y = 50 + Math.random() * (height - 100);
      holes.push({ id: `h-${i}`, x, y });
    }
    
    // Add minority carriers
    if (biasMode === 'forward') {
      // Electrons injected into p-region
      for (let i = 0; i < 3; i++) {
        const x = junctionX - 60 - Math.random() * 80;
        const y = 50 + Math.random() * (height - 100);
        electrons.push({ id: `e-min-${i}`, x, y, minority: true });
      }
      
      // Holes injected into n-region
      for (let i = 0; i < 3; i++) {
        const x = junctionX + 60 + Math.random() * 80;
        const y = 50 + Math.random() * (height - 100);
        holes.push({ id: `h-min-${i}`, x, y, minority: true });
      }
    }
    
    return { electrons, holes };
  };
  
  const { electrons, holes } = generateCarriers();
  
  // Animation variants
  const electronVariants = {
    default: (minority: boolean) => ({
      x: [0, minority ? -20 : 10, minority ? -40 : 20, minority ? -20 : 10, 0],
      y: [0, 10, 0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }),
    forward: (minority: boolean) => ({
      x: minority ? [-60, -120] : [0, 10, 20, 10, 0],
      y: [0, 10, 0, -10, 0],
      opacity: minority ? [1, 0] : 1,
      transition: {
        duration: minority ? 5 : 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }),
    reverse: {
      x: [0, 10, 20, 10, 0],
      y: [0, 10, 0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };
  
  const holeVariants = {
    default: (minority: boolean) => ({
      x: [0, minority ? 20 : -10, minority ? 40 : -20, minority ? 20 : -10, 0],
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }),
    forward: (minority: boolean) => ({
      x: minority ? [60, 120] : [0, -10, -20, -10, 0],
      y: [0, -10, 0, 10, 0],
      opacity: minority ? [1, 0] : 1,
      transition: {
        duration: minority ? 5 : 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }),
    reverse: {
      x: [0, -10, -20, -10, 0],
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* P-side */}
        <rect
          x="0"
          y="0"
          width={junctionX}
          height={height}
          fill={pSideColor}
          fillOpacity="0.2"
          stroke="none"
        />
        <text x="20" y="30" className="text-lg font-medium fill-pink-700">P-type</text>
        
        {/* N-side */}
        <rect
          x={junctionX}
          y="0"
          width={junctionX}
          height={height}
          fill={nSideColor}
          fillOpacity="0.2"
          stroke="none"
        />
        <text x={width - 80} y="30" className="text-lg font-medium fill-blue-700">N-type</text>
        
        {/* Depletion region */}
        <rect
          x={depletionLeft}
          y="0"
          width={depletionWidth}
          height={height}
          fill={depletionColor}
          stroke="none"
        />
        <text 
          x={junctionX} 
          y={height - 20} 
          textAnchor="middle" 
          className="text-xs font-medium fill-gray-700"
        >
          Depletion Region
        </text>
        
        {/* Junction line */}
        <line
          x1={junctionX}
          y1="0"
          x2={junctionX}
          y2={height}
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="4"
        />
        
        {/* Battery if biased */}
        {biasMode !== 'none' && (
          <g>
            <rect
              x={width / 2 - 80}
              y={height - 60}
              width="40"
              height="20"
              fill={batteryColor}
              stroke="none"
            />
            <rect
              x={width / 2 + 40}
              y={height - 60}
              width="40"
              height="20"
              fill={batteryColor}
              stroke="none"
            />
            <line
              x1={width / 2 - 80}
              y1={height - 50}
              x2="20"
              y2={height - 50}
              stroke={batteryColor}
              strokeWidth="2"
            />
            <line
              x1="20"
              y1={height - 50}
              x2="20"
              y2={height / 2}
              stroke={batteryColor}
              strokeWidth="2"
            />
            <line
              x1={width / 2 + 80}
              y1={height - 50}
              x2={width - 20}
              y2={height - 50}
              stroke={batteryColor}
              strokeWidth="2"
            />
            <line
              x1={width - 20}
              y1={height - 50}
              x2={width - 20}
              y2={height / 2}
              stroke={batteryColor}
              strokeWidth="2"
            />
            
            {/* Battery polarity */}
            <text 
              x={width / 2 - 60} 
              y={height - 50} 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="text-sm font-bold fill-white"
            >
              {biasMode === 'forward' ? '+' : '-'}
            </text>
            <text 
              x={width / 2 + 60} 
              y={height - 50} 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="text-sm font-bold fill-white"
            >
              {biasMode === 'forward' ? '-' : '+'}
            </text>
          </g>
        )}
        
        {/* Electrons */}
        {electrons.map((electron) => (
          <motion.circle
            key={electron.id}
            cx={electron.x}
            cy={electron.y}
            r="6"
            fill={electronColor}
            custom={electron.minority}
            variants={electronVariants}
            animate={biasMode === 'none' ? 'default' : biasMode}
          />
        ))}
        
        {/* Holes */}
        {holes.map((hole) => (
          <motion.circle
            key={hole.id}
            cx={hole.x}
            cy={hole.y}
            r="6"
            stroke={holeColor}
            strokeWidth="2"
            fill="none"
            custom={hole.minority}
            variants={holeVariants}
            animate={biasMode === 'none' ? 'default' : biasMode}
          />
        ))}
      </svg>
      
      <div className="mt-4 text-center text-sm text-gray-700">
        <p className="font-medium">
          P-N Junction {biasMode === 'none' ? 'at Equilibrium' : biasMode === 'forward' ? 'under Forward Bias' : 'under Reverse Bias'}
        </p>
        {biasMode === 'forward' && (
          <p className="mt-1 text-xs">Reduced barrier height allows increased carrier flow</p>
        )}
        {biasMode === 'reverse' && (
          <p className="mt-1 text-xs">Increased barrier height restricts carrier flow</p>
        )}
        {biasMode === 'none' && (
          <p className="mt-1 text-xs">Diffusion and drift currents are balanced</p>
        )}
      </div>
    </div>
  );
}

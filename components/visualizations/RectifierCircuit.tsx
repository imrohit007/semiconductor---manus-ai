'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type RectifierCircuitProps = {
  type: 'half-wave' | 'full-wave';
  withCapacitor?: boolean;
  width?: number;
  height?: number;
};

export default function RectifierCircuit({
  type = 'half-wave',
  withCapacitor = false,
  width = 500,
  height = 400
}: RectifierCircuitProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  
  // Colors
  const wireColor = '#374151'; // gray-700
  const diodeColor = '#3B82F6'; // blue-500
  const resistorColor = '#10B981'; // emerald-500
  const capacitorColor = '#8B5CF6'; // violet-500
  const inputWaveColor = '#EF4444'; // red-500
  const outputWaveColor = '#F59E0B'; // amber-500
  
  // Animation settings
  React.useEffect(() => {
    let animationFrame: number;
    let lastTimestamp: number;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      if (isRunning) {
        setTime((prevTime) => (prevTime + elapsed / 1000) % 1);
      }
      
      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isRunning]);
  
  // Calculate wave values
  const calculateInputWave = (t: number) => {
    return Math.sin(t * Math.PI * 2);
  };
  
  const calculateOutputWave = (t: number) => {
    const input = calculateInputWave(t);
    
    if (type === 'half-wave') {
      // Half-wave rectification
      const rectified = Math.max(0, input);
      
      if (withCapacitor) {
        // Simplified capacitor effect (slow discharge)
        const dischargeRate = 0.3;
        const prevOutput = calculateOutputWave((t - 0.01 + 1) % 1);
        
        if (rectified > prevOutput) {
          return rectified;
        } else {
          return Math.max(0, prevOutput - dischargeRate * 0.01);
        }
      }
      
      return rectified;
    } else {
      // Full-wave rectification
      const rectified = Math.abs(input);
      
      if (withCapacitor) {
        // Simplified capacitor effect (slow discharge)
        const dischargeRate = 0.3;
        const prevOutput = calculateOutputWave((t - 0.01 + 1) % 1);
        
        if (rectified > prevOutput) {
          return rectified;
        } else {
          return Math.max(0, prevOutput - dischargeRate * 0.01);
        }
      }
      
      return rectified;
    }
  };
  
  // Generate wave points
  const generateWavePoints = (
    calculateValue: (t: number) => number,
    startX: number,
    endX: number,
    centerY: number,
    amplitude: number,
    samples: number = 100
  ) => {
    const points = [];
    
    for (let i = 0; i <= samples; i++) {
      const t = (time + i / samples) % 1;
      const value = calculateValue(t);
      const x = startX + (i / samples) * (endX - startX);
      const y = centerY - value * amplitude;
      
      points.push({ x, y });
    }
    
    return points;
  };
  
  // Create SVG path from points
  const createPath = (points: { x: number, y: number }[]) => {
    return points.map((point, index) => 
      index === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`
    ).join(' ');
  };
  
  // Generate wave points
  const inputWavePoints = generateWavePoints(
    calculateInputWave,
    50,
    width - 50,
    80,
    30
  );
  
  const outputWavePoints = generateWavePoints(
    calculateOutputWave,
    50,
    width - 50,
    height - 80,
    30
  );
  
  // Current animation
  const currentPosition = time;
  const inputValue = calculateInputWave(currentPosition);
  const outputValue = calculateOutputWave(currentPosition);
  
  // Toggle animation
  const toggleAnimation = () => {
    setIsRunning(!isRunning);
  };
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* Input wave */}
        <text x="20" y="40" className="text-sm font-medium fill-gray-700">Input AC</text>
        <line x1="50" y1="80" x2={width - 50} y2="80" stroke="#D1D5DB" strokeWidth="1" />
        <path
          d={createPath(inputWavePoints)}
          fill="none"
          stroke={inputWaveColor}
          strokeWidth="2"
        />
        
        {/* Circuit diagram */}
        <g transform={`translate(${width / 2 - 100}, 160)`}>
          {/* AC source */}
          <circle cx="0" cy="0" r="20" fill="none" stroke={wireColor} strokeWidth="2" />
          <path
            d="M -10,0 Q 0,-10 10,0 Q 0,10 -10,0"
            fill="none"
            stroke={wireColor}
            strokeWidth="2"
          />
          
          {/* Wires */}
          <line x1="0" y1="-20" x2="0" y2="-40" stroke={wireColor} strokeWidth="2" />
          <line x1="0" y1="20" x2="0" y2="40" stroke={wireColor} strokeWidth="2" />
          
          {type === 'half-wave' ? (
            // Half-wave rectifier
            <>
              {/* Diode */}
              <line x1="0" y1="-40" x2="60" y2="-40" stroke={wireColor} strokeWidth="2" />
              <polygon
                points="40,-50 60,-40 40,-30"
                fill={diodeColor}
                stroke={diodeColor}
                strokeWidth="2"
              />
              <line x1="40" y1="-50" x2="40" y2="-30" stroke={diodeColor} strokeWidth="2" />
              
              {/* Load resistor */}
              <line x1="60" y1="-40" x2="60" y2="0" stroke={wireColor} strokeWidth="2" />
              <path
                d="M 60,0 L 60,10 L 50,12 L 70,16 L 50,20 L 70,24 L 50,28 L 70,32 L 60,34 L 60,40"
                fill="none"
                stroke={resistorColor}
                strokeWidth="2"
              />
              
              {/* Capacitor (if enabled) */}
              {withCapacitor && (
                <>
                  <line x1="60" y1="0" x2="100" y2="0" stroke={wireColor} strokeWidth="2" />
                  <line x1="100" y1="-15" x2="100" y2="15" stroke={capacitorColor} strokeWidth="2" />
                  <line x1="110" y1="-15" x2="110" y2="15" stroke={capacitorColor} strokeWidth="2" />
                  <line x1="110" y1="0" x2="150" y2="0" stroke={wireColor} strokeWidth="2" />
                  <line x1="150" y1="0" x2="150" y2="40" stroke={wireColor} strokeWidth="2" />
                </>
              )}
              
              {/* Complete the circuit */}
              <line x1="0" y1="40" x2={withCapacitor ? "150" : "60"} y2="40" stroke={wireColor} strokeWidth="2" />
            </>
          ) : (
            // Full-wave rectifier
            <>
              {/* Center-tapped transformer */}
              <rect x="-30" y="-60" width="60" height="40" fill="none" stroke={wireColor} strokeWidth="2" />
              <line x1="0" y1="-60" x2="0" y2="-80" stroke={wireColor} strokeWidth="2" />
              <line x1="-20" y1="-20" x2="-20" y2="0" stroke={wireColor} strokeWidth="2" />
              <line x1="20" y1="-20" x2="20" y2="0" stroke={wireColor} strokeWidth="2" />
              <line x1="0" y1="-20" x2="0" y2="-10" stroke={wireColor} strokeWidth="2" />
              <circle cx="0" cy="-15" r="2" fill={wireColor} />
              
              {/* Diodes */}
              <line x1="-20" y1="0" x2="0" y2="20" stroke={wireColor} strokeWidth="2" />
              <polygon
                points="-15,5 -5,15 -20,15"
                fill={diodeColor}
                stroke={diodeColor}
                strokeWidth="2"
              />
              
              <line x1="20" y1="0" x2="0" y2="20" stroke={wireColor} strokeWidth="2" />
              <polygon
                points="15,5 5,15 20,15"
                fill={diodeColor}
                stroke={diodeColor}
                strokeWidth="2"
              />
              
              {/* Load resistor */}
              <line x1="0" y1="20" x2="0" y2="30" stroke={wireColor} strokeWidth="2" />
              <path
                d="M 0,30 L 0,40 L -10,42 L 10,46 L -10,50 L 10,54 L -10,58 L 10,62 L 0,64 L 0,70"
                fill="none"
                stroke={resistorColor}
                strokeWidth="2"
              />
              
              {/* Capacitor (if enabled) */}
              {withCapacitor && (
                <>
                  <line x1="0" y1="30" x2="40" y2="30" stroke={wireColor} strokeWidth="2" />
                  <line x1="40" y1="15" x2="40" y2="45" stroke={capacitorColor} strokeWidth="2" />
                  <line x1="50" y1="15" x2="50" y2="45" stroke={capacitorColor} strokeWidth="2" />
                  <line x1="50" y1="30" x2="90" y2="30" stroke={wireColor} strokeWidth="2" />
                  <line x1="90" y1="30" x2="90" y2="70" stroke={wireColor} strokeWidth="2" />
                </>
              )}
              
              {/* Complete the circuit */}
              <line x1="0" y1="-10" x2={withCapacitor ? "90" : "0"} y2={withCapacitor ? "30" : "-10"} stroke={wireColor} strokeWidth="2" />
              <line x1="0" y1="70" x2={withCapacitor ? "90" : "0"} y2="70" stroke={wireColor} strokeWidth="2" />
            </>
          )}
        </g>
        
        {/* Output wave */}
        <text x="20" y={height - 120} className="text-sm font-medium fill-gray-700">Output DC</text>
        <line x1="50" y1={height - 80} x2={width - 50} y2={height - 80} stroke="#D1D5DB" strokeWidth="1" />
        <path
          d={createPath(outputWavePoints)}
          fill="none"
          stroke={outputWaveColor}
          strokeWidth="2"
        />
        
        {/* Current animation */}
        <motion.circle
          cx={50 + currentPosition * (width - 100)}
          cy={80 - inputValue * 30}
          r="4"
          fill={inputWaveColor}
        />
        
        <motion.circle
          cx={50 + currentPosition * (width - 100)}
          cy={height - 80 - outputValue * 30}
          r="4"
          fill={outputWaveColor}
        />
      </svg>
      
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={toggleAnimation}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isRunning ? 'Pause' : 'Play'}
        </button>
        
        <div className="text-center text-sm text-gray-700">
          <p className="font-medium">
            {type === 'half-wave' ? 'Half-Wave' : 'Full-Wave'} Rectifier
            {withCapacitor ? ' with Capacitor Filter' : ''}
          </p>
          <p className="mt-1 text-xs">
            {type === 'half-wave' 
              ? 'Converts AC to pulsating DC by blocking negative half-cycles' 
              : 'Converts AC to pulsating DC by inverting negative half-cycles'}
            {withCapacitor && ', smoothed by capacitor charging and discharging'}
          </p>
        </div>
      </div>
    </div>
  );
}

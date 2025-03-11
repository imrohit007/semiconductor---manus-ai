'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type DiodeCharacteristicsCurveProps = {
  diodeType?: 'silicon' | 'germanium';
  width?: number;
  height?: number;
  interactive?: boolean;
};

export default function DiodeCharacteristicsCurve({
  diodeType = 'silicon',
  width = 500,
  height = 300,
  interactive = true
}: DiodeCharacteristicsCurveProps) {
  const [voltage, setVoltage] = useState(0);
  
  // Constants
  const padding = 40;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;
  const originX = padding;
  const originY = height - padding;
  
  // Threshold voltage based on diode type
  const thresholdVoltage = diodeType === 'silicon' ? 0.7 : 0.3;
  
  // Calculate current based on voltage (simplified diode equation)
  const calculateCurrent = (v: number): number => {
    if (v < -5) return -0.01; // Breakdown region (simplified)
    if (v <= 0) return -0.001; // Reverse bias region
    if (v < thresholdVoltage) return 0.01 * v / thresholdVoltage; // Below threshold
    return 0.01 + Math.exp(5 * (v - thresholdVoltage)) * 0.1; // Forward bias region
  };
  
  // Generate points for the curve
  const generateCurvePoints = () => {
    const points = [];
    for (let v = -5; v <= 2; v += 0.1) {
      const current = calculateCurrent(v);
      // Scale to fit in the graph
      const x = originX + (v + 5) * graphWidth / 7;
      const y = originY - (current + 0.01) * graphHeight / 1.5;
      points.push({ x, y, voltage: v, current });
    }
    return points;
  };
  
  const curvePoints = generateCurvePoints();
  
  // Create SVG path from points
  const createPath = (points: { x: number, y: number }[]) => {
    return points.map((point, index) => 
      index === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`
    ).join(' ');
  };
  
  // Handle slider change
  const handleVoltageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoltage(parseFloat(e.target.value));
  };
  
  // Find the point on the curve corresponding to the current voltage
  const currentPoint = curvePoints.find(point => 
    Math.abs(point.voltage - voltage) < 0.1
  ) || curvePoints[50]; // Default to a middle point if not found
  
  // Calculate current for the selected voltage
  const current = calculateCurrent(voltage);
  
  return (
    <div className="relative">
      <svg width={width} height={height} className="border border-gray-300 rounded-lg bg-gray-50">
        {/* Axes */}
        <line 
          x1={originX} 
          y1={padding} 
          x2={originX} 
          y2={originY} 
          stroke="#374151" 
          strokeWidth="2" 
        />
        <line 
          x1={originX} 
          y1={originY} 
          x2={width - padding} 
          y2={originY} 
          stroke="#374151" 
          strokeWidth="2" 
        />
        
        {/* Axis labels */}
        <text 
          x={width / 2} 
          y={height - 10} 
          textAnchor="middle" 
          className="text-sm fill-gray-700"
        >
          Voltage (V)
        </text>
        <text 
          x={10} 
          y={height / 2} 
          textAnchor="middle" 
          transform={`rotate(-90, 10, ${height / 2})`}
          className="text-sm fill-gray-700"
        >
          Current (mA)
        </text>
        
        {/* Voltage markers */}
        {[-4, -2, 0, 1, 2].map(v => {
          const x = originX + (v + 5) * graphWidth / 7;
          return (
            <g key={`v-${v}`}>
              <line 
                x1={x} 
                y1={originY} 
                x2={x} 
                y2={originY + 5} 
                stroke="#374151" 
                strokeWidth="1" 
              />
              <text 
                x={x} 
                y={originY + 20} 
                textAnchor="middle" 
                className="text-xs fill-gray-700"
              >
                {v}
              </text>
            </g>
          );
        })}
        
        {/* Current markers */}
        {[0, 0.5, 1.0].map(i => {
          const y = originY - i * graphHeight / 1.5;
          return (
            <g key={`i-${i}`}>
              <line 
                x1={originX - 5} 
                y1={y} 
                x2={originX} 
                y2={y} 
                stroke="#374151" 
                strokeWidth="1" 
              />
              <text 
                x={originX - 10} 
                y={y} 
                textAnchor="end" 
                dominantBaseline="middle"
                className="text-xs fill-gray-700"
              >
                {i}
              </text>
            </g>
          );
        })}
        
        {/* Origin label */}
        <text 
          x={originX - 5} 
          y={originY + 5} 
          textAnchor="end" 
          className="text-xs fill-gray-700"
        >
          0
        </text>
        
        {/* Threshold voltage marker */}
        <line 
          x1={originX + (thresholdVoltage + 5) * graphWidth / 7} 
          y1={originY} 
          x2={originX + (thresholdVoltage + 5) * graphWidth / 7} 
          y2={padding} 
          stroke="#9CA3AF" 
          strokeWidth="1" 
          strokeDasharray="4" 
        />
        <text 
          x={originX + (thresholdVoltage + 5) * graphWidth / 7} 
          y={padding - 10} 
          textAnchor="middle" 
          className="text-xs fill-gray-700"
        >
          Vth = {thresholdVoltage}V
        </text>
        
        {/* Diode curve */}
        <path 
          d={createPath(curvePoints)} 
          fill="none" 
          stroke="#3B82F6" 
          strokeWidth="3" 
        />
        
        {/* Current point */}
        {interactive && (
          <motion.circle 
            cx={currentPoint.x} 
            cy={currentPoint.y} 
            r="6" 
            fill="#EF4444" 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Voltage and current lines */}
        {interactive && (
          <>
            <line 
              x1={currentPoint.x} 
              y1={originY} 
              x2={currentPoint.x} 
              y2={currentPoint.y} 
              stroke="#9CA3AF" 
              strokeWidth="1" 
              strokeDasharray="4" 
            />
            <line 
              x1={originX} 
              y1={currentPoint.y} 
              x2={currentPoint.x} 
              y2={currentPoint.y} 
              stroke="#9CA3AF" 
              strokeWidth="1" 
              strokeDasharray="4" 
            />
          </>
        )}
      </svg>
      
      {interactive && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>-5V</span>
            <span>Voltage: {voltage.toFixed(1)}V</span>
            <span>2V</span>
          </div>
          <input 
            type="range" 
            min="-5" 
            max="2" 
            step="0.1" 
            value={voltage} 
            onChange={handleVoltageChange}
            className="w-full"
          />
          <div className="mt-2 text-center">
            <span className="text-sm font-medium">
              Current: {(current * 1000).toFixed(2)} μA
              {voltage > 0 && voltage < thresholdVoltage && " (below threshold)"}
              {voltage >= thresholdVoltage && " (conducting)"}
              {voltage < 0 && " (reverse bias)"}
            </span>
          </div>
        </div>
      )}
      
      <div className="mt-2 text-center text-sm text-gray-700">
        <p className="font-medium">
          {diodeType === 'silicon' ? 'Silicon' : 'Germanium'} Diode V-I Characteristics
        </p>
        <p className="mt-1 text-xs">
          Threshold voltage: {thresholdVoltage}V
        </p>
      </div>
    </div>
  );
}

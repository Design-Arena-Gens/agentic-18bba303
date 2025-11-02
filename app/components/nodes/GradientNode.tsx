import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function GradientNode() {
  const [startColor, setStartColor] = useState('#ff0080');
  const [endColor, setEndColor] = useState('#7928ca');
  const [direction, setDirection] = useState('horizontal');

  return (
    <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg shadow-xl border-2 border-pink-500 min-w-[240px]">
      <div className="bg-pink-800 px-4 py-2 rounded-t-md border-b border-pink-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌈</span>
          <h3 className="font-semibold text-white text-sm">Add Gradient</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs text-pink-100 block mb-1">Direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full px-2 py-1 bg-pink-900/50 border border-pink-500 rounded text-white text-sm"
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
            <option value="diagonal">Diagonal</option>
            <option value="radial">Radial</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-pink-100 block mb-1">Start Color</label>
          <input
            type="color"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
            className="w-full h-8 bg-pink-900/50 border border-pink-500 rounded cursor-pointer"
          />
        </div>
        <div>
          <label className="text-xs text-pink-100 block mb-1">End Color</label>
          <input
            type="color"
            value={endColor}
            onChange={(e) => setEndColor(e.target.value)}
            className="w-full h-8 bg-pink-900/50 border border-pink-500 rounded cursor-pointer"
          />
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-pink-400 border-2 border-white" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-pink-400 border-2 border-white" />
    </div>
  );
}

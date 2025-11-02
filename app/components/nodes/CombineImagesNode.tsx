import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function CombineImagesNode() {
  const [mode, setMode] = useState('overlay');
  const [opacity, setOpacity] = useState(50);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow-xl border-2 border-purple-500 min-w-[240px]">
      <div className="bg-purple-800 px-4 py-2 rounded-t-md border-b border-purple-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">🔗</span>
          <h3 className="font-semibold text-white text-sm">Combine Images</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs text-purple-100 block mb-1">Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full px-2 py-1 bg-purple-900/50 border border-purple-500 rounded text-white text-sm"
          >
            <option value="overlay">Overlay</option>
            <option value="multiply">Multiply</option>
            <option value="screen">Screen</option>
            <option value="add">Add</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-purple-100 block mb-1">Opacity: {opacity}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <Handle type="target" position={Position.Left} id="input1" style={{ top: '35%' }} className="w-3 h-3 bg-purple-400 border-2 border-white" />
      <Handle type="target" position={Position.Left} id="input2" style={{ top: '65%' }} className="w-3 h-3 bg-purple-400 border-2 border-white" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-purple-400 border-2 border-white" />
    </div>
  );
}

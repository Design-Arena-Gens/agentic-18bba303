import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function PerlinNoiseNode() {
  const [scale, setScale] = useState(50);
  const [octaves, setOctaves] = useState(4);
  const [persistence, setPersistence] = useState(0.5);

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg shadow-xl border-2 border-green-500 min-w-[240px]">
      <div className="bg-green-800 px-4 py-2 rounded-t-md border-b border-green-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">🌀</span>
          <h3 className="font-semibold text-white text-sm">Perlin Noise</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs text-green-100 block mb-1">Scale: {scale}</label>
          <input
            type="range"
            min="10"
            max="200"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs text-green-100 block mb-1">Octaves</label>
          <input
            type="number"
            min="1"
            max="8"
            value={octaves}
            onChange={(e) => setOctaves(Number(e.target.value))}
            className="w-full px-2 py-1 bg-green-900/50 border border-green-500 rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-green-100 block mb-1">Persistence: {persistence.toFixed(2)}</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={persistence}
            onChange={(e) => setPersistence(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-green-400 border-2 border-white" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-green-400 border-2 border-white" />
    </div>
  );
}

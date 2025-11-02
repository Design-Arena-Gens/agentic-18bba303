import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function CreateImageNode() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(300);
  const [color, setColor] = useState('#3b82f6');

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-xl border-2 border-blue-500 min-w-[240px]">
      <div className="bg-blue-800 px-4 py-2 rounded-t-md border-b border-blue-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">🖼️</span>
          <h3 className="font-semibold text-white text-sm">Create Image</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs text-blue-100 block mb-1">Width</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full px-2 py-1 bg-blue-900/50 border border-blue-500 rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-blue-100 block mb-1">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full px-2 py-1 bg-blue-900/50 border border-blue-500 rounded text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-blue-100 block mb-1">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-8 bg-blue-900/50 border border-blue-500 rounded cursor-pointer"
          />
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-blue-400 border-2 border-white" />
    </div>
  );
}

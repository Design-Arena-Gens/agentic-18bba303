import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function DisplayImageNode() {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg shadow-xl border-2 border-orange-500 min-w-[240px]">
      <div className="bg-orange-800 px-4 py-2 rounded-t-md border-b border-orange-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">👁️</span>
          <h3 className="font-semibold text-white text-sm">Display Image</h3>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <label className="text-xs text-orange-100 block mb-1">Zoom: {zoom}%</label>
          <input
            type="range"
            min="25"
            max="200"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="bg-orange-900/50 border border-orange-500 rounded p-3 h-32 flex items-center justify-center">
          <div className="text-orange-300 text-xs text-center">
            Preview<br />
            <span className="text-[10px]">Connect input to display</span>
          </div>
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="w-3 h-3 bg-orange-400 border-2 border-white" />
    </div>
  );
}

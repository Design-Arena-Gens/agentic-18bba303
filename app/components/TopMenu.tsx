import React from 'react';

interface TopMenuProps {
  onClearAll: () => void;
}

export default function TopMenu({ onClearAll }: TopMenuProps) {
  return (
    <div className="bg-gray-950 border-b border-gray-700 px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white">Node Editor</h1>
        <div className="flex gap-2">
          <button
            className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm transition-colors border border-gray-600"
            onClick={onClearAll}
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="text-gray-400 text-sm">
        Right-click to add nodes • Drag to pan • Scroll to zoom
      </div>
    </div>
  );
}

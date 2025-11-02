import React, { useEffect, useRef } from 'react';

interface ContextMenuProps {
  top: number;
  left: number;
  onAddNode: (type: string) => void;
  onDeleteNode?: () => void;
  onClose: () => void;
}

const nodeTypes = [
  { type: 'createImage', label: 'Create Image', icon: '🖼️' },
  { type: 'combineImages', label: 'Combine Images', icon: '🔗' },
  { type: 'gradient', label: 'Add Gradient', icon: '🌈' },
  { type: 'perlinNoise', label: 'Perlin Noise', icon: '🌀' },
  { type: 'displayImage', label: 'Display Image', icon: '👁️' },
];

export default function ContextMenu({ top, left, onAddNode, onDeleteNode, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed bg-gray-800 border border-gray-600 rounded-lg shadow-2xl py-2 z-50 min-w-[200px]"
      style={{ top, left }}
    >
      {onDeleteNode && (
        <>
          <button
            className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 transition-colors flex items-center gap-2"
            onClick={onDeleteNode}
          >
            <span>🗑️</span>
            <span>Delete Node</span>
          </button>
          <div className="border-t border-gray-600 my-2" />
        </>
      )}

      {!onDeleteNode && (
        <>
          <div className="px-4 py-2 text-gray-400 text-xs font-semibold uppercase">Add Node</div>
          {nodeTypes.map((node) => (
            <button
              key={node.type}
              className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
              onClick={() => onAddNode(node.type)}
            >
              <span>{node.icon}</span>
              <span>{node.label}</span>
            </button>
          ))}
        </>
      )}
    </div>
  );
}

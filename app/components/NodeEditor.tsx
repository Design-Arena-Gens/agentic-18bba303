'use client';

import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Node,
  NodeMouseHandler,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';

import CreateImageNode from './nodes/CreateImageNode';
import CombineImagesNode from './nodes/CombineImagesNode';
import GradientNode from './nodes/GradientNode';
import PerlinNoiseNode from './nodes/PerlinNoiseNode';
import DisplayImageNode from './nodes/DisplayImageNode';
import TopMenu from './TopMenu';
import ContextMenu from './ContextMenu';

const nodeTypes = {
  createImage: CreateImageNode,
  combineImages: CombineImagesNode,
  gradient: GradientNode,
  perlinNoise: PerlinNoiseNode,
  displayImage: DisplayImageNode,
};

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

let nodeId = 0;

function Flow() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [menu, setMenu] = useState<{ top: number; left: number; right?: number; bottom?: number } | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const { project, getNode } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'default' }, eds)),
    [setEdges]
  );

  const onNodeContextMenu: NodeMouseHandler = useCallback(
    (event, node) => {
      event.preventDefault();
      setSelectedNode(node.id);
      setMenu({
        top: event.clientY,
        left: event.clientX,
      });
    },
    [setMenu]
  );

  const onPaneContextMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      const bounds = reactFlowWrapper.current?.getBoundingClientRect();
      if (!bounds) return;

      setSelectedNode(null);
      setMenu({
        top: event.clientY,
        left: event.clientX,
      });
    },
    [setMenu]
  );

  const onPaneClick = useCallback(() => {
    setMenu(null);
  }, []);

  const addNode = useCallback(
    (type: string) => {
      if (!menu || !reactFlowWrapper.current) return;

      const bounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = project({
        x: menu.left - bounds.left,
        y: menu.top - bounds.top,
      });

      const newNode: Node = {
        id: `node-${nodeId++}`,
        type,
        position,
        data: { label: type },
      };

      setNodes((nds) => nds.concat(newNode));
      setMenu(null);
    },
    [menu, project, setNodes]
  );

  const deleteNode = useCallback(() => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode));
      setEdges((eds) => eds.filter((edge) => edge.source !== selectedNode && edge.target !== selectedNode));
      setMenu(null);
      setSelectedNode(null);
    }
  }, [selectedNode, setNodes, setEdges]);

  const deleteEdge = useCallback(
    (edgeId: string) => {
      setEdges((eds) => eds.filter((edge) => edge.id !== edgeId));
    },
    [setEdges]
  );

  const clearAll = useCallback(() => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges]);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900" ref={reactFlowWrapper}>
      <TopMenu onClearAll={clearAll} />
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onPaneClick={onPaneClick}
          onPaneContextMenu={onPaneContextMenu}
          onNodeContextMenu={onNodeContextMenu}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-800"
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#444" />
          <Controls className="bg-gray-700 border-gray-600" />
        </ReactFlow>
        {menu && (
          <ContextMenu
            top={menu.top}
            left={menu.left}
            onAddNode={addNode}
            onDeleteNode={selectedNode ? deleteNode : undefined}
            onClose={() => setMenu(null)}
          />
        )}
      </div>
    </div>
  );
}

export default function NodeEditor() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}

// src/nodes/BaseNode.js

// baseNode.js

import React from "react";
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, children, handles = {}, style = {} }) => {
  return (
    <div
      style={{
        width: 200,

        border: "1px solid black",
        borderRadius: "8px",
        padding: "10px",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {handles.source &&
        handles.source.map((handle, index) => (
          <Handle
            key={`source-${index}`}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={{ top: handle.position }}
          />
        ))}
      {handles.target &&
        handles.target.map((handle, index) => (
          <Handle
            key={`target-${index}`}
            type="target"
            position={Position.Left}
            id={handle.id}
            style={{ top: handle.position }}
          />
        ))}
      <div>{children}</div>
    </div>
  );
};

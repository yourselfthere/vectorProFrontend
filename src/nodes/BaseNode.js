// src/nodes/BaseNode.js

import React from "react";
import { Handle } from "reactflow";

const BaseNode = ({ id, data, children, handles }) => {
  return (
    <div style={{ width: 200, border: "1px solid black" }}>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{data.label}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default BaseNode;

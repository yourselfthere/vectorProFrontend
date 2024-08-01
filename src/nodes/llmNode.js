// llmNode.js

// import { Handle, Position } from "reactflow";

// export const LLMNode = ({ id, data }) => {
//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{ top: `${100 / 3}%` }}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{ top: `${200 / 3}%` }}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-response`} />
//     </div>
//   );
// };

// import React from "react";
// import BaseNode from "./BaseNode";
// import { Position } from "reactflow";
// export const LLMNode = ({ id }) => {
//   const handles = [
//     {
//       id: "system",
//       type: "target",
//       position: Position.Left,
//       style: { top: "33%" },
//     },
//     {
//       id: "prompt",
//       type: "target",
//       position: Position.Left,
//       style: { top: "66%" },
//     },
//     { id: "response", type: "source", position: Position.Right },
//   ];

//   return (
//     <BaseNode id={id} data={{ label: "LLM" }} handles={handles}>
//       <div>This is an LLM.</div>
//     </BaseNode>
//   );
// };

// llmNode.js

// llmNode.js

import { BaseNode } from "./BaseNode";
import { useState } from "react";
import { Handle, Position } from "reactflow";

export const LLMNode = ({ id }) => {
  const handles = {
    target: [
      { id: `${id}-system`, position: `${100 / 3}%` },
      { id: `${id}-prompt`, position: `${200 / 3}%` },
    ],
    source: [{ id: `${id}-response`, position: "50%" }],
  };

  return (
    <BaseNode id={id} handles={handles} style={{ width: 200, height: 120 }}>
      <div>
        <span>LLM</span>
      </div>
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};

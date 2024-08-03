// // textNode.js

// import { useState } from "react";
// import { Handle, Position } from "reactflow";

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{ width: 200, height: 80, border: "1px solid black" }}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input type="text" value={currText} onChange={handleTextChange} />
//         </label>
//       </div>
//       <Handle type="source" position={Position.Right} id={`${id}-output`} />
//     </div>
//   );
// };
// import React, { useState } from "react";
// import BaseNode from "./BaseNode";
// import { Position } from "reactflow";
// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || "{{input}}");

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   const handles = [{ id: "output", type: "source", position: Position.Right }];

//   return (
//     <BaseNode id={id} data={{ label: "Text" }} handles={handles}>
//       <label>
//         Text:
//         <input type="text" value={currText} onChange={handleTextChange} />
//       </label>
//     </BaseNode>
//   );
// };

// textNode.js

// textNode.js

import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState({ source: [], target: [] });
  const textRef = useRef(null);

  const MIN_WIDTH = 100;
  const MIN_HEIGHT = 50;

  useEffect(() => {
    adjustNodeSize();
  }, [currText]);

  const adjustNodeSize = () => {
    if (textRef.current) {
      // Temporarily set the height to 'auto' to get the scroll height
      textRef.current.style.height = "auto";
      const newHeight = Math.max(textRef.current.scrollHeight, MIN_HEIGHT);
      textRef.current.style.height = `${newHeight}px`;

      // Temporarily set the width to 'auto' to get the scroll width
      textRef.current.style.width = "auto";
      const newWidth = Math.max(textRef.current.scrollWidth, MIN_WIDTH);
      textRef.current.style.width = `${newWidth}px`;
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Extract variables within double curly brackets
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(newText)) !== null) {
      variables.push(match[1]);
    }

    // Update handles based on extracted variables
    const newHandles = {
      source: [{ id: `${id}-output`, position: "50%" }],
      target: variables.map((variable, index) => ({
        id: `${id}-${variable}`,
        position: `${(index + 1) * 20}%`,
      })),
    };

    setHandles(newHandles);
  };

  return (
    <BaseNode id={id} handles={handles} style={{ backgroundColor: "#E8F5E9" }}>
      <div>
        <label>
          Text:
          <textarea
            ref={textRef}
            value={currText}
            onChange={handleTextChange}
            style={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              overflow: "hidden",
              resize: "none",
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};

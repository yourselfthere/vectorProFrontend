// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="fileLoader" label="File Loader" />
        <DraggableNode type="sum" label="Sum Node" />
        <DraggableNode type="divide" label="Divide" />
        <DraggableNode type="multiply" label="Multiply" />
        <DraggableNode type="subtract" label="subtract" />
      </div>
    </div>
  );
};

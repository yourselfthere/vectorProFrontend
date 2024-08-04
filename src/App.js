import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import ReactFlow, { ReactFlowProvider } from "reactflow";
import SubmitButton from "./submit";

function App() {
  return (
    <ReactFlowProvider>
      <div>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ReactFlowProvider>
  );
}

export default App;

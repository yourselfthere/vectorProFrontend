import React, { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FileLoader = ({ id, data }) => {
  const [fileContent, setFileContent] = useState("");

  const handles = {
    source: [{ id: `${id}-output`, position: "50%" }],
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
        if (data.onFileLoad) {
          data.onFileLoad(e.target.result);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <BaseNode id={id} handles={handles} style={{ backgroundColor: "#FFF3E0" }}>
      <div>
        <input type="file" onChange={handleFileChange} />
        {fileContent && (
          <div>
            <h4>File Content:</h4>
            <pre>{fileContent}</pre>
          </div>
        )}
      </div>
    </BaseNode>
  );
};

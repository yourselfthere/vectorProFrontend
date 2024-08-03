// divideNode.js
import React, { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const DivideNode = ({ id, data }) => {
  const [quotient, setQuotient] = useState(0);

  useEffect(() => {
    const inputs = data.inputs || {};
    const input1 = inputs[`${id}-input1`] || 0;
    const input2 = inputs[`${id}-input2`] || 1; // Avoid division by zero
    setQuotient(input1 / input2);
  }, [data.inputs, id]);

  const handles = {
    source: [{ id: `${id}-output`, position: "50%" }],
    target: [
      { id: `${id}-input1`, position: "30%" },
      { id: `${id}-input2`, position: "70%" },
    ],
  };

  return (
    <BaseNode id={id} handles={handles} style={{ backgroundColor: "#F0F4C3" }}>
      <div>
        <span>Quotient: {quotient}</span>
      </div>
    </BaseNode>
  );
};

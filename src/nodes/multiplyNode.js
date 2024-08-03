// multiplyNode.js
import React, { useState, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const MultiplyNode = ({ id, data }) => {
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const inputs = data.inputs || {};
    const input1 = inputs[`${id}-input1`] || 0;
    const input2 = inputs[`${id}-input2`] || 0;
    setProduct(input1 * input2);
  }, [data.inputs, id]);

  const handles = {
    source: [{ id: `${id}-output`, position: "50%" }],
    target: [
      { id: `${id}-input1`, position: "30%" },
      { id: `${id}-input2`, position: "70%" },
    ],
  };

  return (
    <BaseNode id={id} handles={handles} style={{ backgroundColor: "#C8E6C9" }}>
      <div>
        <span>Product: {product}</span>
      </div>
    </BaseNode>
  );
};

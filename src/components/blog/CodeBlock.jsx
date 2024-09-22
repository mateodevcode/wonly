import React from "react";

const CodeBlock = ({ codigo }) => {
  return (
    <div className="w-full leading-loose mt-5">
      <pre className="bg-[#FAFAFA]">
        <code>{codigo}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

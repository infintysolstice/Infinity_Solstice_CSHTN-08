import React, { useState } from "react";
import Editor from "@monaco-editor/react";

function CodeEditor() {
  const [lang, setLang] = useState("html");
  return (
    <div className="monaco-editor">
      <div className="monaco-container">
        <Editor
          height="80vh"
          theme="vs-dark"
          defaultLanguage="python"
          defaultValue="//Write Your code here"
        />
      </div>
    </div>
  );
}

export default CodeEditor;

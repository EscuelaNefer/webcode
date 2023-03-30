import React from "react";

export default function Pdf({ name }) {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        id="pdfContent"
        aria-label="Pdf"
        data={require("../docs/" + name)}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
}

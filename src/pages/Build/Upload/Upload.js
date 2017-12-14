import React from "react";

import { Button } from "semantic-ui-react";

const Upload = ({ handleUpload }) => (
  <div style={{ marginBottom: "1rem" }}>
    <Button as="label" htmlFor="upload-csv">
      Upload CSV
    </Button>
    <input
      type="file"
      onChange={handleUpload}
      accept=".csv"
      id="upload-csv"
      style={{ opacity: 0, width: 0 }}
    />
  </div>
);
export default Upload;

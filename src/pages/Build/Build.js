import React from "react";
import { Button, Dropdown, Select } from "semantic-ui-react";
import Upload from "./Upload";
import Spreadsheet from "./Spreadsheet";
import EditablePost from "./EditablePost";

const BuildLayout = ({
  handleSave,
  handleOption,
  config,
  layout,
}) => {
  const handleChooseType = (e, { value }) => {
    handleOption({ chartType: value });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Create your nugget</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "4em 1fr"
        }}
      >
        <div>
          <Upload />
        </div>
        <div>
          <Dropdown
            selection
            options={config.chartType}
            value={layout.chartType}
            onChange={handleChooseType}
            style={{ marginRight: "1rem" }}
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
        <div>
          <Spreadsheet />
        </div>
        <div>
          <EditablePost />
        </div>
      </div>
    </div>
  );
};

export default BuildLayout;

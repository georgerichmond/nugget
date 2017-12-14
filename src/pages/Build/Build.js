import React from "react";
import { Select } from "semantic-ui-react";
import Upload from "./Upload";
import Spreadsheet from "./Spreadsheet";
import EditablePost from "./EditablePost";

class BuildLayout extends React.Component {
  render() {
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
            <Select
              placeholder="Chart type"
              options={[{ key: "line", text: "Line" }]}
            />
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
  }
}

export default BuildLayout;
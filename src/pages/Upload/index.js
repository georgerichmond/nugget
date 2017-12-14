import React from "react";
import * as d3 from "d3";
import HotTable from "react-handsontable";
import _ from "lodash";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Image,
  Segment
} from "semantic-ui-react";
import Select from "semantic-ui-react/dist/es/addons/Select/Select";
import Post from "../../components/Post";
import ed from "../../img/personas/ed.jpg";

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

const Spreadsheet = ({ data, onAfterChange }) => {
  const tableProps = {
    data,
    width: 500,
    height: 500,
    rowHeaders: true,
    colHeaders: true,
    minRows: 12,
    minCols: 9,
    onAfterChange
  };

  return <HotTable {...tableProps} />;
};

class UploadContainer extends React.Component {
  state = {};

  handleUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csvStr = reader.result;
      const data = d3.csvParseRows(csvStr);
      this.setState({ data });
    };

    reader.readAsText(file);
  };

  onAfterChange = (changes, type) => {
    if (!changes) return;

    let data = this.state.data ? _.clone(this.state.data) : [];

    changes.forEach(change => {
      const [row, column, oldValue, newValue] = change;
      data = _.set(data, [row, column], newValue);
    });

    this.setState({ data });
  };

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
            <Upload handleUpload={this.handleUpload} />
          </div>
          <div>
            <Select
              placeholder="Chart type"
              options={[{ key: "line", text: "Line" }]}
            />
          </div>
          <div>
            <Spreadsheet
              data={this.state.data}
              onAfterChange={this.onAfterChange}
            />
          </div>
          <div>
            <Post chart={{ data: this.state.data }} />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadContainer;

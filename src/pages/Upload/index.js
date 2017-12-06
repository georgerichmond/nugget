import React from "react";
import * as d3 from "d3";
import HotTable from "react-handsontable";
import _ from 'lodash'

import LineChart from "../../components/LineChart";

const Upload = ({ handleUpload }) => (
  <div style={{ width: "100%" }}>
    <h1>Creating your nugget</h1>

    <h2>Upload CSV</h2>
    <form action="">
      <input type="file" onChange={handleUpload} accept=".csv" />
    </form>
  </div>
);

const Spreadsheet = ({ data, onAfterChange }) => {

  const tableProps = {
    data,
    rowHeaders: true,
    colHeaders: true,
    onAfterChange
  }

  return (
    <div>
      <HotTable {...tableProps} />
    </div>
  );
};

const Chart = ({ json }) => {
  if (!json) return null;

  const data = json.map(({ x, y }) => ({ x, y: parseFloat(y) }));

  return (
    <div style={{}}>
      <h2>Your chart</h2>
      <div style={{ width: "500px", height: "500px" }}>
        <LineChart data={data} />
      </div>
    </div>
  );
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

    let data = this.state.data ? _.clone(this.state.data) : []

    changes.forEach(change => {
      const [row, column, oldValue, newValue] = change
      data = _.set(data, [row, column], newValue)
    })

    console.table(data)

    this.setState({data})

  }

  render() {
    return (
      <div
        style={{ width: "600px", padding: "1rem", backgroundColor: "white" }}
      >
        <Upload handleUpload={this.handleUpload} />
        <Spreadsheet data={this.state.data} onAfterChange={this.onAfterChange}/>
      </div>
    );
  }
}

export default UploadContainer;

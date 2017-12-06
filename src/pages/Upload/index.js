import React from 'react'

import csvtojson from 'csvtojson'
import LineChart from "../../components/LineChart";

import 'react-table/react-table.css'

import ReactTable from 'react-table'

const categoryPreviewData = {
  columns: [{
    Header: 'Country',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Cakes eaten',
    accessor: 'cakes',
  }],
  data: [
    {
      name: 'France',
      cakes: 3
    },

    {
      name: 'Belgium',
      cakes: 2.5
    },
    {
      name: 'Germany',
      cakes: 1
    },

  ]

}



const timeSeriesPreviewData = {
  columns: [{
    Header: 'Year',
    accessor: 'date'
  }, {
    Header: 'Growth in GDP',
    accessor: 'growth',
  }],
  data: [
    {
      date: '1980',
      growth: 0.9
    },

    {
      date: '1990',
      growth: 4.6
    },
    {
      date: '2000',
      growth: 3.5
    },

  ]

}


const Upload = ({handleUpload}) => (<div style={{width: '100%'}}>
  <h1>Creating your nugget</h1>

  <h2>Examples</h2>

  <p>For category data, your CSV data could look something like this:</p>

  <ReactTable
    data={categoryPreviewData.data}
    columns={categoryPreviewData.columns}
    showPagination={false}
    defaultPageSize={3}
  />

  <p>For time series data, your CSV data could look something like this:</p>

  <ReactTable
    data={timeSeriesPreviewData.data}
    columns={timeSeriesPreviewData.columns}
    showPagination={false}
    defaultPageSize={3}
  />

  <h2>Upload CSV</h2>
  <p>
    <form action="">
      <input type="file" onChange={handleUpload} accept=".csv"/>
    </form>
  </p>


</div>)

const Preview = ({json}) => {

  if (!json) return null


  const columns = Object.keys(json[0]).map(accessor => ({accessor, Header: accessor}))

  return (
    <div style={{margin: '1rem 0'}}>

      <h3>Preview your data</h3>

      <p>Only the first 10 rows are shown</p>

      <ReactTable
        data={json}
        columns={columns}
        showPagination={false}
        defaultPageSize={10}
      />

      <div style={{margin: '1rem 0'}}>

        <button>I'm happy with this data</button>

      </div>

    </div>
  )
    ;
}


const Chart = ({json}) => {

  if (!json) return null

  const data = json.map(({x, y}) => ({x, y: parseFloat(y)}))

  return (
    <div style={{}}>
      <h2>Your chart</h2>
      <div style={{width: '500px', height: '500px'}}>

        <LineChart data={data}/>

      </div>

    </div>

  )
}


class UploadContainer extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  handleUpload = (e) => {

    const file = e.target.files[0]
    const reader = new FileReader();

    reader.onload = () => {
      const csvStr = reader.result
      csvtojson()
        .fromString(csvStr)
        .on('end_parsed', (json) => {
          this.setState({json})
        })
    }
    reader.readAsText(file);
  }


  render() {
    return (
      <div style={{width: '600px', padding: '1rem', backgroundColor: 'white'}}>
        <Upload handleUpload={this.handleUpload}/>
        <Preview json={this.state.json}/>
        <Chart json={this.state.json}/>
      </div>
    )
  }

}


export default UploadContainer
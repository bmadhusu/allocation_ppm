import React, { Component } from 'react';
import './App.css';
import 'react-table/react-table.css'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'
import axios from 'axios'

// window.$ = window.jQuery = require('jquery');
// var $ = require("jquery");
// This worked!! (the above didn't)
// https://stackoverflow.com/questions/36494174/how-to-import-dependencies-in-reactjs-class
// import $ from 'jquery'; <- this works but am forgoing as Axios works

//var helpers = require('./helpers.js');
import {chf_columns, persondays_columns, project_pivot, resource_pivot, roundUp} from './helpers.js';

const url_to_fetch_data = "/public/platform_services/platform_services_data.js";

//const roundUp = window.roundUp;

class App extends Component {

  constructor() {
    super();

  this.renderEditable = this.renderEditable.bind(this);

// Need to 'inject' the renderEditable callback into the columns; can't do this
    // in the helpers.js file so doing it here; need to figure out a nicer way to do this

    chf_columns.forEach( (i, index) => { if (index < 12) i["Cell"] = this.renderEditable; })
    persondays_columns.forEach( (i, index) => { if (index < 12) i["Cell"] = this.renderEditable; })

    var view = resource_pivot.concat(chf_columns);
    this.state = {
      entries: [],
      amt_to_spend: 0,
      totals: [0,0,0,0,0,0,0,0,0,0,0,0,0],
     // data: data,
     loaded: false,
      current_columns: view,
      pivotBy: ["name"]//, "project"]
    };
  }

componentDidMount() {
    var _this = this;
    this.serverRequest = 
      axios
        .get(url_to_fetch_data)
        .then(function(result) {
          // console.log("afer promise: " + JSON.parse(result));
          _this.setState({
            data: result.data
          });
        })
        .catch(error => {
          console.log('Error with axios: ', error);
        })

  }

 componentWillUnmount() {
    console.log("In Unmount");
    this.serverRequest.abort();
  }

renderEditable(cellInfo) {

   // [cellInfo.index][cellInfo.column.id] );

  if (typeof(cellInfo.index) != "undefined") {
    let split = cellInfo.column.id.split(".");
      return (
        <div
          style={{ backgroundColor: "#fafafa", textAlign: "right" }}
          contentEditable
          suppressContentEditableWarning
          onBlur={e => {
            const data = [...this.state.data];
            data[cellInfo.index][split[0]][split[1]] = Number(e.target.innerHTML);
            //data[cellInfo.index]["total"][split[1]] += Number(e.target.innerHTML);

            // Propagate changes in CHF to PDs and vice-versa using the rate of the resource
            if (split[1] == "chf") {
              data[cellInfo.index][split[0]]["pd"] = roundUp(data[cellInfo.index][split[0]]["chf"] / data[cellInfo.index]["rate"],2);
          //    data[cellInfo.index]["total"]["pd"] += (roundUp(data[cellInfo.index][split[0]]["chf"] / data[cellInfo.index]["rate"],2));
            }
            else {
              data[cellInfo.index][split[0]]["chf"] = roundUp(data[cellInfo.index][split[0]]["pd"] * data[cellInfo.index]["rate"],2);
         //     data[cellInfo.index]["total"]["chf"] += (roundUp(data[cellInfo.index][split[0]]["pd"] * data[cellInfo.index]["rate"],2));
            }

         //   console.log("Executing callback: data is " + JSON.stringify(data));
              this.setState({ data });
          }}
        
           dangerouslySetInnerHTML={{
             __html: this.state.data[cellInfo.index][split[0]][split[1]]
           }}
        />
      );
  
  }
}

handleColType(event) {

  let pivotby = [];
  switch(this.refs.groupby_type.value) {
    case "Resource":
        pivotby = resource_pivot;
        break;
      case "Project":
        pivotby = project_pivot;
        break;
      case "Program":
        pivotby = resource_pivot;
        break;
      case "Manager":
        pivotby = resource_pivot;
        break;
  }

  this.setState({current_columns: event.target.value == "chf_columns" ? pivotby.concat(chf_columns) : pivotby.concat(persondays_columns)});
}

handleGroupBy(event) {

  let pivotBy_cols = [];
  let colType = [];

  let pivotby = [];
  switch(event.target.value) {
    case "Resource":
        pivotby = resource_pivot;
        pivotBy_cols = ["name", "project"];
        break;
      case "Project":
        pivotby = project_pivot;
        pivotBy_cols = ["project", "name"];
        break;
      case "Program":
        pivotby = resource_pivot;
        break;
      case "Manager":
        pivotby = resource_pivot;
        break;
  }

  switch(this.refs.column_type.value) {
    case "chf_columns":
      colType = chf_columns;
      break;
    case "persondays_columns":
      colType = persondays_columns;
      break;
  }

  this.setState({current_columns: pivotby.concat(colType), pivotBy: pivotBy_cols});
}

callMe(column, value) {
  console.log(`HI! console is ${JSON.stringify(column)} and value: ${JSON.stringify(value)}`);

  //this.setState( {data: matchSorter(this.state.data, value, { keys: ["project"] }) } );

}

render() {

 // if (this.state.data) {
  return(
    <div>
    <h2>Filters</h2>
     <label>CHF or Person Days:</label>
        <select ref="column_type" onChange = {this.handleColType.bind(this)}>
          <option value="chf_columns" selected>CHF</option>
          <option value="persondays_columns">PD</option>
        </select>

        <label>Group by:</label>
        <select ref="groupby_type" onChange = {this.handleGroupBy.bind(this)}>
          <option value="Resource" selected>Resource</option>
          <option value="Project">Project</option>
          <option value="Program">Program</option>
          <option value="Manager">Manager</option>
        </select>
        <br/>
    <hr/>
 { /* <ReactTable showPagination={false} data={this.state.data} filterable columns={this.state.current_columns} pivotBy={this.state.pivotBy} className="-striped -highlight" />

  // <ReactTable showPagination={false} data={this.state.data} filterable 
  // columns={this.state.current_columns} pivotBy={this.state.pivotBy} collapseOnDataChange ={false} className="-striped -highlight" />
  */ }

 <ReactTable showPagination={false} data={this.state.data} filterable columns={this.state.current_columns} pivotBy={this.state.pivotBy} collapseOnDataChange={false} className="-striped -highlight" loading={!this.state.loaded}
  onFetchData={ (state, instance) => {
    // console.log("state.loaded is" , this.state.loaded);
    if (!this.state.loaded) {
      axios
          .get(url_to_fetch_data)
          .then( (result) => {
            console.log("got it: ", result.data);
            this.setState({
              data: result.data,
              loaded: true
            })
          })
          }}}
   />

    </div>
  );

  }
  // else
  //   return(<div>NO WAY</div>);
  // }
}

  

export default App;

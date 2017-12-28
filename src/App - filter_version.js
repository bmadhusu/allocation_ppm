import React, { Component } from 'react';
import './App.css';
import ResourcePicker from './ResourcePicker.js';
import AllocationTable from './AllocationTable.js';
import 'react-table/react-table.css'
import ReactTable from 'react-table'
import matchSorter from 'match-sorter'



// var helpers = require('./helpers.js');
import {chf_columns, persondays_columns, data} from './helpers.js';


// var peeps = helpers.peeps2;

class App extends Component {

  constructor() {
    super();
    this.state = {
      entries: [],
      amt_to_spend: 0,
      totals: [0,0,0,0,0,0,0,0,0,0,0,0,0],
      data: data
    };
  }

//  roundUp(num, precision) {
//   precision = Math.pow(10, precision)
//   return Math.ceil(num * precision) / precision
// }

addEntry(s) {

  var entries = this.state.entries;
      
  // s["rate"] = peeps[s["name"]];
  entries.push( s );

  var totals = this.state.totals;

  // Calculate column totals

  for (var j=0; j<12;j++) {
      totals[j] += s["amt"] / s["rate"] / 12;
  }

  this.setState( {entries: entries, totals: totals} );
}

clearTable() {

  this.setState( { entries: [], totals: [0,0,0,0,0,0,0,0,0,0,0,0,0] });
}

handleAmtToSpend(s) {

  this.setState( { amt_to_spend: s });
}

callMe(column, value) {
  console.log(`HI! console is ${JSON.stringify(column)} and value: ${JSON.stringify(value)}`);

  //this.setState( {data: matchSorter(this.state.data, value, { keys: ["project"] }) } );

}

render() {


 //const chf_columns = window.chf_columns;
 console.log(" IM HERE");
 console.log(JSON.stringify(chf_columns));
console.log(" IM PAST");


  return(
  <ReactTable showPagination={false} data={this.state.data} columns={chf_columns} filterable 
  onFilteredChange={(column, value) => this.callMe(column, value)}
  className="-striped -highlight"/>
  );
  }
}

  

export default App;

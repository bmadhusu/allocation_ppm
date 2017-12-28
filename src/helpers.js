import React, { Component } from 'react';
import _ from "lodash";
import matchSorter from 'match-sorter'


function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

export const data = [{
    name: 'Sajan Peter',
    project: 'PR-030852-R2K',
    jan: {
      chf:12000,
      pd: 18,
    },feb: {
      chf:12000,
      pd: 18,
    },mar: {
      chf:12000,
      pd: 18,
    },apr: {
      chf:12000,
      pd: 18,
    },may: {
      chf:12000,
      pd: 18,
    },jun: {
      chf:12000,
      pd: 18,
    },jul: {
      chf:12000,
      pd: 18,
    },aug: {
      chf:12000,
      pd: 18,
    },sep: {
      chf:12000,
      pd: 18,
    },oct: {
      chf:12000,
      pd: 18,
    },nov: {
      chf:12000,
      pd: 18,
    },dec: {
      chf:12000,
      pd: 18,
    },total: {
      chf:144000,
      pd: 216,
    }},
    {
    name: 'Sajan Peter',
    project: 'PR-016547-Recon_CCAR',
    jan: {
      chf:6000,
      pd: 6,
    },feb: {
      chf:6000,
      pd: 6,
    },mar: {
      chf:6000,
      pd: 6,
    },apr: {
      chf:6000,
      pd: 6,
    },may: {
      chf:6000,
      pd: 6,
    },jun: {
      chf:6000,
      pd: 6,
    },jul: {
      chf:6000,
      pd: 6,
    },aug: {
      chf:6000,
      pd: 6,
    },sep: {
      chf:6000,
      pd: 6,
    },oct: {
      chf:6000,
      pd: 6,
    },nov: {
      chf:6000,
      pd: 6,
    },dec: {
      chf:6000,
      pd: 6,
    },total: {
      chf:72000,
      pd: 72,
    }},
    {
    name: 'Bijal Shah',
    project: 'PR-030852-R2K',
    jan: {
      chf:6000,
      pd: 9,
    },feb: {
      chf:6000,
      pd: 9,
    },mar: {
      chf:6000,
      pd: 9,
    },apr: {
      chf:6000,
      pd: 9,
    },may: {
      chf:6000,
      pd: 9,
    },jun: {
      chf:6000,
      pd: 9,
    },jul: {
      chf:6000,
      pd: 9,
    },aug: {
      chf:6000,
      pd: 9,
    },sep: {
      chf:6000,
      pd: 9,
    },oct: {
      chf:6000,
      pd: 9,
    },nov: {
      chf:6000,
      pd: 9,
    },dec: {
      chf:6000,
      pd: 9,
    },total: {
      chf:72000,
      pd: 72,
    }},
    {
    name: 'Bijal Shah',
    project: 'PR-024578-RbPnl',
    jan: {
      chf:6000,
      pd: 9,
    },feb: {
      chf:6000,
      pd: 9,
    },mar: {
      chf:6000,
      pd: 9,
    },apr: {
      chf:6000,
      pd: 9,
    },may: {
      chf:6000,
      pd: 9,
    },jun: {
      chf:6000,
      pd: 9,
    },jul: {
      chf:6000,
      pd: 9,
    },aug: {
      chf:6000,
      pd: 9,
    },sep: {
      chf:6000,
      pd: 9,
    },oct: {
      chf:6000,
      pd: 9,
    },nov: {
      chf:6000,
      pd: 9,
    },dec: {
      chf:6000,
      pd: 9,
    },total: {
      chf:72000,
      pd: 72,
    }
  }];



export const chf_columns = [{
    Header: 'Resource',
    accessor: 'name', // String-based value accessors!
    // filterMethod: (filter, rows) =>
    //                 matchSorter(rows, filter.value, { keys: ["name"] }),
    // filterAll: true
    
  }, {
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
    // filterMethod: (filter, rows) => 
    //                 matchSorter(rows, filter.value, { keys: ["project"] }),
    // filterAll: true
  }, {
    id: 'Jan.CHF', // Required because our accessor is not a string
    Header: 'Jan CHF',
    filterable: false,
    accessor: d => d.jan.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    }
  }, {
    id: 'Feb CHF', // Required because our accessor is not a string
    Header: 'Feb CHF',
    filterable: false,
    accessor: d => d.feb.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Mar CHF', // Required because our accessor is not a string
    Header: 'Mar CHF',
    filterable: false,
    accessor: d => d.mar.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Apr CHF', // Required because our accessor is not a string
    Header: 'Apr CHF',
    filterable: false,
    accessor: d => d.apr.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'May CHF', // Required because our accessor is not a string
    Header: 'May CHF',
    filterable: false,
    accessor: d => d.may.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Jun CHF', // Required because our accessor is not a string
    Header: 'Jun CHF',
    filterable: false,
    accessor: d => d.jun.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Jul CHF', // Required because our accessor is not a string
    Header: 'Jul CHF',
    filterable: false,
    accessor: d => d.jul.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Aug CHF', // Required because our accessor is not a string
    Header: 'Aug CHF',
    filterable: false,
    accessor: d => d.aug.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Sep CHF', // Required because our accessor is not a string
    Header: 'Sep CHF',
    filterable: false,
    accessor: d => d.sep.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Oct CHF', // Required because our accessor is not a string
    Header: 'Oct CHF',
    filterable: false,
    accessor: d => d.oct.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Nov CHF', // Required because our accessor is not a string
    Header: 'Nov CHF',
    filterable: false,
    accessor: d => d.nov.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Dec CHF', // Required because our accessor is not a string
    Header: 'Dec CHF',
    filterable: false,
    accessor: d => d.dec.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'Total CHF',  
    Header: 'Total CHF',
    filterable: false,
    accessor: d => d.total.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }];

export const persondays_columns = [{
    Header: 'Resource',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'Jan PD', // Required because our accessor is not a string
    Header: 'Jan PD',
    accessor: d => d.jan.pd // Custom value accessors!
  }, {
    id: 'Feb PD', // Required because our accessor is not a string
    Header: 'Feb PD',
    accessor: d => d.feb.pd // Custom value accessors!
  }, {
    id: 'Mar PD', // Required because our accessor is not a string
    Header: 'Mar PD',
    accessor: d => d.mar.pd // Custom value accessors!
  }, {
    id: 'Apr PD', // Required because our accessor is not a string
    Header: 'Apr PD',
    accessor: d => d.apr.pd // Custom value accessors!
  }, {
    id: 'May PD', // Required because our accessor is not a string
    Header: 'May PD',
    accessor: d => d.may.pd // Custom value accessors!
  }, {
    id: 'Jun PD', // Required because our accessor is not a string
    Header: 'Jun PD',
    accessor: d => d.jun.pd // Custom value accessors!
  }, {
    id: 'Jul PD', // Required because our accessor is not a string
    Header: 'Jul PD',
    accessor: d => d.jul.pd // Custom value accessors!
  }, {
    id: 'Aug PD', // Required because our accessor is not a string
    Header: 'Aug PD',
    accessor: d => d.aug.pd // Custom value accessors!
  }, {
    id: 'Sep PD', // Required because our accessor is not a string
    Header: 'Sep PD',
    accessor: d => d.sep.pd // Custom value accessors!
  }, {
    id: 'Oct PD', // Required because our accessor is not a string
    Header: 'Oct PD',
    accessor: d => d.oct.pd // Custom value accessors!
  }, {
    id: 'Nov PD', // Required because our accessor is not a string
    Header: 'Nov PD',
    accessor: d => d.nov.pd // Custom value accessors!
  }, {
    id: 'Dec PD', // Required because our accessor is not a string
    Header: 'Dec PD',
    accessor: d => d.dec.pd // Custom value accessors!
  }, {
    id: 'Total PD', // Required because our accessor is not a string
    Header: 'Total PD',
    accessor: d => d.total.pd // Custom value accessors!
  },

  {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }];


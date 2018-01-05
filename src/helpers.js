import React, { Component } from 'react';
import _ from "lodash";
import matchSorter from 'match-sorter'


export function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

export function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

export const data = [{
    name: 'Sajan Peter',
    project: 'PR-030852-R2K',
    rate: 960.12,
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
    }},
    {
    name: 'Sajan Peter',
    project: 'PR-016547-Recon_CCAR',
    rate: 960.12,
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
    }},
    {
    name: 'Bijal Shah',
    project: 'PR-030852-R2K',
    rate: 688.4,
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
    }},
    {
    name: 'Bijal Shah',
    project: 'PR-024578-RbPnl',
    rate: 688.4,
    jan: {
      chf:0,
      pd: 0,
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
    }
  }];




export const chf_columns = [{
    id: 'jan.chf', // Required because our accessor is not a string
    Header: 'Jan CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.jan.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    }
  }, {
    id: 'feb.chf', // Required because our accessor is not a string
    Header: 'Feb CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.feb.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'mar.chf', // Required because our accessor is not a string
    Header: 'Mar CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.mar.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'apr.chf', // Required because our accessor is not a string
    Header: 'Apr CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.apr.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'may.chf', // Required because our accessor is not a string
    Header: 'May CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.may.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'jun.chf', // Required because our accessor is not a string
    Header: 'Jun CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.jun.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'jul.chf', // Required because our accessor is not a string
    Header: 'Jul CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.jul.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'aug.chf', // Required because our accessor is not a string
    Header: 'Aug CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.aug.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'sep.chf', // Required because our accessor is not a string
    Header: 'Sep CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.sep.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'oct.chf', // Required because our accessor is not a string
    Header: 'Oct CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.oct.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'nov.chf', // Required because our accessor is not a string
    Header: 'Nov CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.nov.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'dec.chf', // Required because our accessor is not a string
    Header: 'Dec CHF',
    filterable: false,
    className: 'align_right',
    accessor: d => d.dec.chf, // Custom value accessors!
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'total.chf',
    Header: 'Total CHF',
    filterable: false,
    className: 'align_right',
    //accessor: d => d.total.chf, // Custom value accessors!
    accessor: d => roundUp(d.jan.chf + d.feb.chf + d.mar.chf + d.apr.chf + d.may.chf + d.jun.chf + 
                  d.jul.chf + d.aug.chf + d.sep.chf + d.oct.chf + d.nov.chf + d.dec.chf,2),
    Cell: row => {
      return (
        <span>
          {commaSeparateNumber(roundUp(row.value,0))}
        </span>
      );
    },
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span align={"center"}>
          {commaSeparateNumber(row.value)}
        </span>
      );
    } // Custom value accessors!
  }];

/**************  PERSONDAYS COLUMNS *********************/

export const persondays_columns = [{
    id: 'jan.pd', // Required because our accessor is not a string
    Header: 'Jan PD',
    accessor: d => d.jan.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!// Custom value accessors!
  }, {
    id: 'feb.pd', // Required because our accessor is not a string
    Header: 'Feb PD',
    accessor: d => d.feb.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!// Custom value accessors!
  }, {
    id: 'mar.pd', // Required because our accessor is not a string
    Header: 'Mar PD',
    accessor: d => d.mar.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!// Custom value accessors!
  }, {
    id: 'apr.pd', // Required because our accessor is not a string
    Header: 'Apr PD',
    accessor: d => d.apr.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!// Custom value accessors!
  }, {
    id: 'may.pd', // Required because our accessor is not a string
    Header: 'May PD',
    accessor: d => d.may.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!// Custom value accessors!
  }, {
    id: 'jun.pd', // Required because our accessor is not a string
    Header: 'Jun PD',
    accessor: d => d.jun.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'jul.pd', // Required because our accessor is not a string
    Header: 'Jul PD',
    accessor: d => d.jul.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'aug.pd', // Required because our accessor is not a string
    Header: 'Aug PD',
    accessor: d => d.aug.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'sep.pd', // Required because our accessor is not a string
    Header: 'Sep PD',
    accessor: d => d.sep.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'oct.pd', // Required because our accessor is not a string
    Header: 'Oct PD',
    accessor: d => d.oct.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'nov.pd', // Required because our accessor is not a string
    Header: 'Nov PD',
    accessor: d => d.nov.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'dec.pd', // Required because our accessor is not a string
    Header: 'Dec PD',
    accessor: d => d.dec.pd,
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }, {
    id: 'total.pd', // Required because our accessor is not a string
    Header: 'Total PD',
    accessor: d => roundUp(d.jan.pd + d.feb.pd + d.mar.pd + d.apr.pd + d.may.pd + d.jun.pd + 
                  d.jul.pd + d.aug.pd + d.sep.pd + d.oct.pd + d.nov.pd + d.dec.pd,2),
    filterable: false,
    className: 'align_right',
    aggregate: vals => _.sum(vals),
    Aggregated: row => {
      return (
        <span>
          {row.value}
        </span>
      );
    } // Custom value accessors!
  }];

export const resource_pivot = [{
    Header: 'Resource',
    accessor: 'name', // String-based value accessors!
  }, 
  {
    Header: 'Team',
    accessor: 'team'
  },
  {
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'Program',
    accessor: 'program'
  }];

  export const project_pivot = [{
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
  }, {Header: 'Resource',
    accessor: 'name', // String-based value accessors!
  },
  {
    Header: 'Program',
    accessor: 'program'
  },
  {
    Header: 'Team',
    accessor: 'team'
  }];

  export const team_pivot = [{
    Header: 'Team',
    accessor: 'team'
  }, {Header: 'Resource',
    accessor: 'name', // String-based value accessors!
  }, {
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
  }, {
    Header: 'Program',
    accessor: 'program'
  }];

export const program_pivot = [{
    Header: 'Program',
    accessor: 'program'
  },
  {
    Header: 'Project',
    accessor: 'project',
    Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
  },
  {
    Header: 'Team',
    accessor: 'team'
  },
  {Header: 'Resource',
    accessor: 'name', // String-based value accessors!
  }];
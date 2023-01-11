import React, { Component } from 'react';
import TimeRangePicker from 'react-time-range-picker';
 
export default class TimeRangeModule extends Component {
 
  pickerupdate = (start_time, end_time) => {
    // start and end time in 24hour time
    console.log(`start time: ${start_time}, end time: ${end_time}`)
  }
 
  render() {
    return (
      <div>
          <TimeRangePicker hourmarkers hourlines timeupdate={this.pickerupdate}/>
          <p>{this.pickerupdate.toString()}</p>
      </div>
    );
  }
}

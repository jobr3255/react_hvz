import React, {Component} from "react";

const TYPE = {
  LOCKIN: "lockin",
  WEEKLONG: "weeklong"
}

export default class FormattedDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      startDate: props.startDate,
      endDate: props.endDate
    }
  }

  addOrdinal(num){
    num += "";
    var lastNum = num.substring(num.length-1, num.length);
    if(lastNum === "1")
      return num + "st";
    else if(lastNum === "2")
      return num + "nd";
    else if(lastNum === "3")
      return num + "rd";
    else
      return num + "th";
  }

  formatDate(startDate, endDate=null){
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"];
    startDate = new Date(startDate);
    var day = startDate.getDate();
    day = this.addOrdinal(day);
    var month = monthNames[startDate.getMonth()];
    var year = startDate.getFullYear();
    if(endDate != null){
      return month + " " + day + " - " + this.formatDate(endDate);
    }
    return month + " " + day + ", " + year + "";
  }

  formatLockinDate(startDate){
    return this.formatDate(startDate) + ", 9pm - 3am";
  }

  render() {
    var date = null;
    if(this.state.type === TYPE.LOCKIN){
      date = this.formatLockinDate(this.state.startDate);
    }else if(this.state.type === TYPE.WEEKLONG){
      date = this.formatDate(this.state.startDate, this.state.endDate);
    }
    return (
      <span>
        {date}
      </span>
    );
  }
}

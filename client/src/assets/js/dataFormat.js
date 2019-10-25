export default class FormattedDate{
  static addOrdinal(num){
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

  static formatDate(startDate, endDate=null){
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"];
    startDate = new Date(startDate);
    var day = startDate.getDate();
    day = FormattedDate.addOrdinal(day);
    var month = monthNames[startDate.getMonth()];
    var year = startDate.getFullYear();
    if(endDate != null){
      return month + " " + day + " - " + FormattedDate.formatDate(endDate);
    }
    return month + " " + day + ", " + year + "";
  }

  static formatLockinDate(startDate){
    return FormattedDate.formatDate(startDate) + ", 9pm - 3am";
  }
}

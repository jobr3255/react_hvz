import React, {Component} from "react";

export default class FormattedDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }

  formatDetails(data){
    // adds <br> tags where there are line breaks
    var formatted = "";
    var eachLine = data.split('\n');
    var leadingWhitespace = true;
    var start, link, link_name, temp, to_replace;
    for(var i = 0, l = eachLine.length; i < l; i++) {
        if(eachLine[i].length > 0 && leadingWhitespace){
          leadingWhitespace = false;
        }
        if(!leadingWhitespace){
          if(eachLine[i].indexOf("[ON_CAMPUS]") >= 0){
            formatted += <h5 style={{margin: 0}}>On Campus</h5>;
          }else if(eachLine[i].indexOf("[OFF_CAMPUS]") >= 0){
            formatted += <h5 style={{margin: 0}}>Off Campus</h5>;
          }else if(eachLine[i].indexOf("[SUPPLY_DROPS]") >= 0){
            formatted += <h5 style={{margin: 0}}>Supply Drops</h5>;
          }else{
            formatted += eachLine[i] + "\n";
          }
        }
    }

    // formats LINK[name][link] into an html link
    while(formatted.indexOf("LINK[") !== -1){
      start = formatted.indexOf("LINK[")
      link = formatted.substring(start,formatted.length);
      link_name = link.substring(5,link.indexOf("]"));
      temp = "LINK["+link_name+"][";
      start = formatted.indexOf(temp)+temp.length;
      link = formatted.substring(start,formatted.length);
      link = link.substring(0,link.indexOf("]"));
      to_replace = "LINK[" + link_name + "][" + link + "]";
      formatted = formatted.replace(to_replace, "<a href='"+link+"'>"+link_name+"</a>");
    }

    // formats LINK_NEW_TAB[name][link] into an html link
    while(formatted.indexOf("LINK_NEW_TAB[") !== -1){
      start = formatted.indexOf("LINK_NEW_TAB[")
      link = formatted.substring(start,formatted.length);
      link_name = link.substring(13,link.indexOf("]"));
      temp = "LINK_NEW_TAB["+link_name+"][";
      start = formatted.indexOf(temp)+temp.length;
      link = formatted.substring(start,formatted.length);
      link = link.substring(0,link.indexOf("]"));
      to_replace = "LINK_NEW_TAB[" + link_name + "][" + link + "]";
      formatted = formatted.replace(to_replace, "<a href='"+link+"' target='_blank' >"+link_name+"</a>");
    }

    var imageLink;
    // formats IMAGE[link] into an image
    while(formatted.indexOf("IMAGE[") !== -1){
      start = formatted.indexOf("IMAGE[")
      temp = formatted.substring(start,formatted.length);
      imageLink = temp.substring(6,temp.indexOf("]"));
      to_replace = "IMAGE[" + imageLink + "]";
      formatted = formatted.replace(to_replace, "<img src='" + imageLink + "' style='width: 100%;'>");
    }

    var size;
    // formats IMAGE[link][size %] into an image
    while(formatted.indexOf("IMAGE_SIZE[") !== -1){
      start = formatted.indexOf("IMAGE_SIZE[");
      temp = formatted.substring(start,formatted.length);
      imageLink = temp.substring(11, temp.indexOf("]"));
      temp = temp.substring(11 + imageLink.length + 2, 11 + imageLink.length + 10);
      // console.log(temp);
      size = temp.substring(0, temp.indexOf("]"));
      to_replace = "IMAGE_SIZE[" + imageLink + "]["+size+"]";
      formatted = formatted.replace(to_replace, "<img src='" + imageLink + "' style='width: " + size + "%;'>");
    }

    var content;
    // formats BOLD[content] into an strong tag
    while(formatted.indexOf("BOLD[") !== -1){
      start = formatted.indexOf("BOLD[")
      temp = formatted.substring(start,formatted.length);
      content = temp.substring(5,temp.indexOf("]"));
      to_replace = "BOLD[" + content + "]";
      formatted = formatted.replace(to_replace, "<strong>" + content + "</strong>");
    }

    var first, second
    // formats [LINE] into line break
    while(formatted.indexOf("[LINE]") !== -1){
      i = formatted.indexOf("[LINE]");
      first = (formatted.substring(0, i)).trim();
      second = (formatted.substring(i+6, formatted.length)).trim();
      second = formatted.substring(formatted.indexOf(second), formatted.length)
      formatted = first+"<hr>"+second;
    }

    return formatted;
  }

  render() {
    var formatted = this.formatDetails(this.state.text);
    return (
      <div className="details-content" dangerouslySetInnerHTML={{__html: formatted}}></div>
    );
  }
}

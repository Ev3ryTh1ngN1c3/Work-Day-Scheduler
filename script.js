var now = new Date();

var hour=now.getHours();
var today=now.getDay();
let days={
  0:"Sunday",
  1:"Monday",
  2:"Tuesday",
  3:"Wednesday",
  4:"Thursday",
  5:"Friday",
  6:"Saturday"
}

$("#currentDay").text(days[today]);


var workDay = {
  "0":{ time: 9,id:9, 
      event: "" },
  "1":{ time: 10, id:10,
      event: "" },
  "2":{ time: 11, id:11,
      event: "" },
  "3":{ time: 12, id:12,
      event: "" },
  "4":{ time: 13, id:1,
      event: "" },
  "5":{ time: 14, id:2,
      event: "" },
  "6":{ time: 15, id:3,
      event: "" },
  "7":{ time: 16, id:4,
      event: "" },
  "8":{ time: 17, id:5,
      event: "" },
};
let loadData=window.localStorage.getItem("saving")
if(loadData){
  let parsedData=JSON.parse(loadData);
  workDay =parsedData;

}



for(let key in workDay){
  let block=workDay[key]
  let elId="#hour-"+block.id+" textarea"
  let btnId="#hour-"+block.id+" button"
  if(hour>block.time){ ///block in the past
    $(elId).removeClass("future").removeClass("present").addClass("past");
  }
  if(hour==block.time){ ///block in the past
    $(elId).removeClass("future").removeClass("past").addClass("present");
  }
   if(hour<block.time){ ///block in the past
    $(elId).removeClass("past").removeClass("present").addClass("future");
  }

  $(elId).val(block.event)
  $(btnId).click(function(){
    workDay[key].event=$(elId).val()
    window.localStorage.setItem("saving",JSON.stringify(workDay))
  })
}







// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


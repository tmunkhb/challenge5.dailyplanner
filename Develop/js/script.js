// Moment.js 
let currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");

// time variables
const nineAm = $("#9am");
const tenAm = $("#10am");
const elevenAm = $("#11am");
const twelvePm = $("#12pm");
const onePm = $("#13pm");
const twoPm = $("#14pm");
const threePm = $("#15pm");
const fourPm = $("#16pm");
const fivePm = $("#17pm");
const sixPm = $("#18pm");
const sevenPm = $("#19pm");

let hour = moment().hours();
let userInput;
let hourSpan;


// Date and Hour

let interval = setInterval(function() {
    let dateNow = moment();
    $('#currentDay').html(dateNow.format('YYYY MMMM DD') + ' '
        + dateNow.format('dddd')
        .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + dateNow.format('hh:mm:ss A'));
}, 100);

// Local storage for each save button for time

function initPage() {
    
    let init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    let init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenAm.val(init10);

    let init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenAm.val(init11);

    let init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(init12);

    let init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    onePm.val(init1);

    let init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoPm.val(init2);

    let init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threePm.val(init3);

    let init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourPm.val(init4);

    let init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fivePm.val(init5);

    let init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixPm.val(init6);

    let init7 = JSON.parse(localStorage.getItem("07:00 pm"));
    sevenPm.val(init7);

};

// Color code for past, present, future
function background () {
      
    $(".form-control").each(function () {
        let timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
      
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  };

  $(document).ready(function(){
    initPage()
    background()
  
    // Save Data on localStorage
    $(".saveBtn").on("click", function(){
      userInput = $(this).siblings(".form-control").val().trim();
      console.log(userInput);
      hourSpan = $(this).siblings(".input-group-prepend").text().trim();
      console.log(hourSpan);
      localStorage.setItem(hourSpan, JSON.stringify(userInput));
  
    });

    // Reset/Clear Day
    $("#resetDay").on("click", function(){
      localStorage.clear();
      initPage()
    }) 
  
  });
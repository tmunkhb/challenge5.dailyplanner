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

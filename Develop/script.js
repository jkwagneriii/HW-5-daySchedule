
// This is the function that updates the date and time in the <p> tag on the HTML page. 
// https://momentjs.com/docs/#/displaying/
function displayTime () {
    const m = moment();
    var timeDisplay = $("#currentDay");
    timeDisplay.text(m.format("LLL"));
}

displayTime();

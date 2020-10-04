
// This is the function that updates the date and time in the <p> tag on the HTML page. 
// https://momentjs.com/docs/#/displaying/
function displayTime () {
    const m = moment();
    //Linking the variable to the HTML
    var timeDisplay = $("#currentDay");
    timeDisplay.text(m.format("LLL"));
}

//Run displayTime function
displayTime();

//This function is returning data (a css class) into the displayRows function. This is what allows each text area to change colors based on what time of day it is. 
function timeCheck(currentRow, currentTime) {
    if (currentRow < currentTime) {
        return 'past'
    } else if (currentRow === currentTime) {
        return 'present'
    } else {
        return 'future'
    } 
}

//Here is the most crucial function in terms of display. Inside of a for loop, I'm using jquery to create elements on the index.html page. Then by adding bootstrap classes, the elements are able to format within the provided grid syntax. The text area is using the timeCheck function to have the background color interact with time of day. 
function displayRows() {

    //Start of for loop
    for (let i = 9; i < 18; i++) {

        //1 create html element with jquery
        var rowDiv = $('<div>')
        var timeDiv = $('<div>')
        var textArea = $('<textarea>')
        var button = $('<button>')

        //2 dress it up with bootstrap classes and timeCheck function
        rowDiv.addClass('row')
        timeDiv.addClass('col-md-2 time-block')
        textArea.addClass(`col-md-8 ${timeCheck(i, moment().hour())}`)
        timeDiv.text(i + ' AM')
        button.attr('name', i)
        textArea.attr('id', 'input-' + i)

        //There has to be a conditional statement that uses math to make sure that the time displayed on the page isnt military time. Without this it would say 13 PM instead of 1 PM.
        if( i > 12 ) {

            var displayHour = i - 12
            timeDiv.text(displayHour + ' PM')
            button.attr('name', displayHour)
           
            textArea.attr('id', 'input-' + displayHour)
        } else if (i === 12) {
            timeDiv.text(i + ' PM')
            
        }

        //The button style is provided in the CSS
        button.addClass('col-md-2 saveBtn')

        //3 .append to page!!
        //Below is a neat trick for adding the elements into the page in one clean line.
        rowDiv.append(timeDiv, textArea, button)
        $('.scheduler').append(rowDiv)
    }
}

//Running the displayRows function
displayRows()

//The start of saving the value from the text area into local storage and displaying it on the page even if the page is reloaded. 
$('.saveBtn').on('click', function() {
    // Here I'm using (this) to get the value from the text area and save it into dataToSave
    // console.log('You got clicked', $(this).attr('name'));
    // console.log('what we typd', $('#input-' + $(this).attr('name')).val())

    var dataToSave
    //Stingify and Parse will be nneded to save the value from scheduler data. The object startingData has empty STRINGS.
    var oldData = JSON.parse(localStorage.getItem('scheduler-data'))
    
    //Empty data values for unedited text areas.
    var startingData ={
        9: '',
        10: '',
        11: '',
        12: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: ' '
    }

    if (oldData) {
        dataToSave = oldData
    } else {
        dataToSave = startingData
    }   
    dataToSave[$(this).attr('name')] = $('#input-' + $(this).attr('name')).val()

    var strData = JSON.stringify(dataToSave)

    //The text area inputs are saving. Need to maintain the display upon refreshing the page.
    localStorage.setItem('scheduler-data', strData)
})



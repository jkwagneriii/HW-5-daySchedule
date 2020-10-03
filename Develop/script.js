
// This is the function that updates the date and time in the <p> tag on the HTML page. 
// https://momentjs.com/docs/#/displaying/
function displayTime () {
    const m = moment();
    var timeDisplay = $("#currentDay");
    timeDisplay.text(m.format("LLL"));
}

displayTime();

function timeCheck(currentRow, currentTime) {
    if (currentRow < currentTime) {
        return 'past'
    } else if (currentRow === currentTime) {
        return 'present'
    } else {
        return 'future'
    } 
}

function displayRows() {

    console.log('moment stuff', moment().hour())
    for (let i = 9; i < 18; i++) {

        //1 create html element with jquery
        var rowDiv = $('<div>')
        var timeDiv = $('<div>')
        var textArea = $('<textarea>')
        var button = $('<button>')

        //2 dress it up how we want
        rowDiv.addClass('row')
        timeDiv.addClass('col-md-2 time-block')
        textArea.addClass(`col-md-8 ${timeCheck(i, moment().hour())}`)
        timeDiv.text(i + ' AM')
        button.attr('name', i)
         textArea.attr('id', 'input-' + i)

        if( i > 12 ) {

            var displayHour = i - 12
            timeDiv.text(displayHour + ' PM')
            button.attr('name', displayHour)
           
            textArea.attr('id', 'input-' + displayHour)
        } else if (i === 12) {
            timeDiv.text(i + ' PM')
            
        }

        button.addClass('col-md-2 saveBtn')
        // .append to page!!
        rowDiv.append(timeDiv, textArea, button)
        $('.scheduler').append(rowDiv)
    }
}

displayRows()

$('.saveBtn').on('click', function() {
    console.log('You got clicked', $(this).attr('name'));
    console.log('what we typd', $('#input-' + $(this).attr('name')).val())

    var dataToSave
    var oldData = JSON.parse(localStorage.getItem('scheduler-data'))
    
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

    console.log('startind data /???',dataToSave)
    var strData = JSON.stringify(dataToSave)

    localStorage.setItem('scheduler-data', strData)
})



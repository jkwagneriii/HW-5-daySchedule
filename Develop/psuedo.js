//When I load the webpage, the date and time will be true to my device. The available timeslots will be 9am-5pm. If the hour has passed, I will have a clear visual cue because the timeslot will be grey. The timeslot that aligns with the current hour will be read. The timeslots that have not yet arrived/passed will be green. 

//When I click onto one of the timeslots, AKA the form, I can type in some text that I would like to save to my schedule. That form will be connected to a button that saves the text submission to the local storage of my device. When the page is reloaded, my text will still be in the correct timeslot. 

//Remember - must use Moment.js to work with date & time.
// https://momentjs.com/
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js" integrity="sha512-Izh34nqeeR7/nwthfeE0SI3c8uhFSnqxV0sI9TvTcXiFJkMd6fB644O64BRq2P/LA/+7eRvCw4GmLsXksyTHBg==" crossorigin="anonymous"></script>

// To get the current date and time, just call moment() with no parameters.
// if you chain multiple actions to construct a date, you should start from a year, then a month, then a day etc.
moment().year(year).month(month).date(day)

// Timeblocks have to be inserted. Possible through either HTML or JS.

// In the <p> tag with the class = "currentDay" I'll use Moment.js to have the date accurately refresh in real time. 

//I can use a switch inside of a for loop, in addition to Moment.js, to have the block colors respond dynamically to what time of day it is. 
switch(expression) {
    //each case would check if the time of day is true, if it is true the block will be red. Otherwise the blocks will be green. Have to read the Moment.js documentation further to figure out how to distinguesh time passed vs. time ahead.
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
}

  //I think each timeblock could be composed of a form element from bootstrap and a button element from bootstrap. The following is reference code for an empty text area form. This is HTML.
<form>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
</form>

//The button element might be safer to build from scratch since it won't be difficult to create/format. 

  
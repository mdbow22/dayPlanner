/********************************
 * Script for Event Functionality
 ********************************/

//Selectors
let eventText = document.querySelectorAll('textarea');
let saveBtns = document.querySelectorAll('.saveBtn');

//Global Variables
let eventTime;
let events = [];

//Retrieve saved events
let getEvents = function() {
    storedEvents = JSON.parse(localStorage.getItem('eventList'));
    if(storedEvents != null) {
        events = storedEvents;
        outputEvents();
    }
}

//Output saved events into planner
let outputEvents = function() {
    events.forEach(function populateEvents(element) {
        for(let i = 0; i < eventText.length; i++) {
            if(element.eTime === eventText[i].dataset.hour) {
                eventText[i].value = element.eDesc;
            }
        }
    });
}

let eventAdd = function(time, desc) {

    //Create a new object for the event to be saved
    let newEvent = {
        eTime: time,
        eDesc: desc
    };
    
    //If there's an event already saved to this time: remove from old event
    if(events != null) {
        for(let i = 0; i < events.length; i++) {
            if(events[i].eTime === time) {
                events.splice(i,1);
            }
        }
    }

    //push new Event into events array
    events.push(newEvent);

    //save events array into localStorage
    localStorage.setItem('eventList',JSON.stringify(events));
};

//eventListener

//Loop through all of the save buttons
for(let i = 0; i < saveBtns.length; i++) {
    saveBtns[i].addEventListener('click',function() {
        //save info from textArea associated with save button that was clicked
        eventTime = eventText[i].dataset.hour;
        eventAdd(eventTime, eventText[i].value);
    });
}

getEvents();

/********************************
 * Script for Time Functionality
 ********************************/

//Selectors
let timeNow = document.getElementById('timeNow');
let timeBlocks = document.querySelectorAll('li');

//Global Variables
let clock;
let curHour = moment().hour();

//Display current time on page
let setTime = function() {
    //refresh time on page
    let ticker = setInterval(function() {
        //set format of time to display
        clock = moment().format('dddd, MMM Do, h:mm a');
        timeNow.textContent = clock;
    }, 1000);
}

setTime();

//Set classes on timeBlocks to reflect where in the day we are.
let colorCode = function() {
    for(let i = 0; i < timeBlocks.length; i++) {
        let blockTime = parseInt(timeBlocks[i].dataset.hour);
        if(blockTime < curHour) {
            timeBlocks[i].classList.remove('current','future');
            timeBlocks[i].classList.add('past');
        } else if (blockTime > curHour) {
            timeBlocks[i].classList.remove('current','past');
            timeBlocks[i].classList.add('future');
        } else {
            timeBlocks[i].classList.remove('future','past');
            timeBlocks[i].classList.add('current');
        }
    }
};

colorCode();
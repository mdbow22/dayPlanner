/********************************
 * Script for Adding Events 
 ********************************/

//Modal selectors

//Modal itself
let eventModal = new bootstrap.Modal(document.getElementById('eventModal'), {
    backdrop: true,
    keyboard: true,
    focus: true
})

//Modal buttons
let closeBtn = document.querySelector('.btn-close');
let dismissBtn = document.getElementById('dismissBtn');
let saveBtn = document.getElementById('saveBtn');

//function to close modal
let closeModal = function() {
    eventModal.hide();
}

//eventListeners to close the modal
closeBtn.addEventListener('click', closeModal);
dismissBtn.addEventListener('click', closeModal);

//Script for opening Modal

//Selectors
let timeList = document.getElementById('hoursInDay');
let curTime = document.querySelector('.curTime');

//function to Open Modal
let openModal = function(event) {
    let amPm;
    if (event.target.dataset.hour < 8 || event.target.dataset.hour == 12) {
        amPm = 'pm';
    } else {
        amPm = 'am';
    }
    curTime.textContent = event.target.dataset.hour + amPm;
    eventModal.show();
}

//EventListener
timeList.addEventListener('click', openModal);
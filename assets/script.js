let hoursList = document.getElementById('hoursInDay');

function init() {
    generateDay();

}

init();

//Generates the HTML for the hours of the day
function generateDay() {
    let time = 8;
    for (let i = 0; i < 9; i++) {
        let hour = document.createElement('li');
        hour.classList.add('list-group-item', 'eachHour', 'd-flex', 'btn');
        hour.setAttribute('id', time + 'oClock');
        hour.setAttribute('data-bs-toggle', 'modal');
        hour.setAttribute('data-bs-target', 'eventModal');
        hour.innerHTML = '<h5>' + time + '</h5>';
        if (time === 12) {
            time = 1;
        } else {
            time++;
        }

        hoursList.appendChild(hour);
    }
    //then calls function to get events from local storage and populate them in each hour.
    //then calls function to get current time and update classList for the line that is the current hour to add .active
}
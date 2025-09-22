const div = document.querySelector('#welcome')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const h3 = div.querySelector('h3') // get the h3 element inside the div
if (isMorning) {
    h3.textContent = 'Good morning!'
} else if (isAfternoon) {
    h3.textContent = 'Good afternoon!'
} else {
    h3.textContent = 'Good evening!'
}

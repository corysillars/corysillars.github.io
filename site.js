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
const key = "It's a secret to everybody"
localStorage.setItem(key, 'You have found it! You get a gem!!!') // store a secret message in local storage
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
document.querySelector('#next').addEventListener('click', () => {
    currentImage++
    showImages()
})
document.querySelector('#prev').addEventListener('click', () => {
    currentImage--
    showImages()
})
setInterval(() => {
    currentImage++
    showImages()
},2000) 
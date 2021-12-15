const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
        toggle.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark');
        toggle.innerHTML = 'Light Mode'
    }
})


function setTime() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const hoursForClock = hour % 12;
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hour >= 12 ? 'PM': 'AM';
    const day = currentDate.getDay();
    const month = currentDate.getMonth();
    const dates = currentDate.getDate();
    // console.log(day);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    time.innerHTML = `${hoursForClock}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds} ${ampm}`
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${dates}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)
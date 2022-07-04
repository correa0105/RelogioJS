const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

setInterval(() => {
    let currentDate = new Date();
    let hour = currentDate.getHours() * 30;
    let minutes = currentDate.getMinutes() * 6;
    let seconds = currentDate.getSeconds() * 6;

    hourHand.style.transform = `rotate(${hour+(minutes/12)}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    secondHand.style.transform = `rotate(${seconds}deg)`;
});
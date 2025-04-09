import './styles.css';

const timerEl = document.querySelector("#timer");
const currentTime = timerEl.textContent.toString();
const timeInput = document.querySelector("#time");
console.log(timeInput.value);

addEventListener("focusout", formatInput);

function formatInput(event) {
    const totalTime = Number(event.target.value);
    const minutes = Math.floor(totalTime / 60);
    if (minutes > 60) {
        const hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    } else {
        hours = 0;
    }
    const seconds = totalTime % 60;
    event.target.input
}
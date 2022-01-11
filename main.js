const second = 1000, minute = second * 60, hours = minute * 60, days = hours * 24;
let countdown = new Date("sep 20,2025 00:00:00").getTime();
time = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdown - now;
    document.getElementById('days').innerText = Math.floor(distance / (days));
    document.getElementById('hours').innerText = Math.floor((distance % (days)) / (hours));
    document.getElementById('minutes').innerText = Math.floor((distance % (hours)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    if (distance < 0) {
        clearInterval(time);
        alert("The discount is over");
    }
})

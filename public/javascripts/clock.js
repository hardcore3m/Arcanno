const clockDiv = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockDiv.innerHTML = `<h2>${hours}:${minutes}:${seconds}</h2>`;
}

function initPage() {

    updateClock();
    
    setInterval(updateClock, 1000);

    setInterval(() => {
        const date = new Date();
        const hour = date.getHours();
        if (hour === 0) {
            updateEphemerid();
        }
    }, 60 * 60 * 1000);

}
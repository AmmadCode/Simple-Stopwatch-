let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let miliii = document.querySelector(".mili");
let show = document.querySelector(".show");
let isRunning = false;
let startTime = 0;
let pausedTime = 0;
let timerId;

const start = () => {
    if (!isRunning) {
        isRunning = true;
        
        // Handle resume from pause
        if (pausedTime > 0) {
            startTime = Date.now() - pausedTime;
        } else {
            startTime = Date.now();
        }
        
        timerId = setInterval(updateDisplay, 10);
    }
};

const updateDisplay = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    
    // Calculate time components
    const mins = Math.floor(elapsed / 60000);
    const secs = Math.floor((elapsed % 60000) / 1000);
    const mills = Math.floor((elapsed % 1000) / 10); // Centiseconds
    
    // Update display
    minute.textContent = mins.toString().padStart(2, '0');
    second.textContent = secs.toString().padStart(2, '0');
    miliii.textContent = mills.toString().padStart(2, '0');
};

const stop = () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerId);
        pausedTime = Date.now() - startTime; // Store paused time
        recordTime();
    }
};

const reset = () => {
    isRunning = false;
    clearInterval(timerId);
    startTime = 0;
    pausedTime = 0;
    minute.textContent = '00';
    second.textContent = '00';
    miliii.textContent = '00';
    show.innerHTML = "";
};

const recordTime = () => {
    const p = document.createElement("p");
    p.textContent = `Paused at: ${minute.textContent}:${second.textContent}.${miliii.textContent}`;
    show.appendChild(p);
};

// Event listeners
document.querySelector(".start").addEventListener("click", start);
document.querySelector(".stop").addEventListener("click", stop);
document.querySelector(".reset").addEventListener("click", reset);
document.querySelector(".getTime").addEventListener("click", recordTime);
document.querySelector(".clearTime").addEventListener("click", () => show.innerHTML = "");a
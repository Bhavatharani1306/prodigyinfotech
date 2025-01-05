let startTime, elapsedTime = 0, timerInterval;
const display = document.querySelector('.display');
const lapsList = document.getElementById('laps');

// Format time to mm:ss:ms
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1000;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  lapsList.innerHTML = '';
}

function lap() {
  const lapTime = formatTime(elapsedTime);
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  lapsList.appendChild(li);
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);
document.getElementById('lap').addEventListener('click', lap);

// JavaScript code for sliding the windows
let index = 0;
const windows = document.querySelectorAll('.window');

function slideWindows() {
  index++;
  if (index >= windows.length) {
    index = 0;
  }
  const translateX = -index * 100 + '%';
  document.querySelector('.window-container').style.transform = `translateX(${translateX})`;
}

setInterval(slideWindows, 5000); // Slide every 5 seconds

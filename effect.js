let i = 0;
let txt = 'Hi! My name is Abigail Banting';
let speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function show(text) {
  document.getElementById("right").innerText = text;
}

// Bubble animation
const bubbleContainer = document.querySelector('.bubble-container');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 20 + 10 + 'px';
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.style.left = Math.random() * 100 + '%';
  bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';

  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 300);

function show(text) {
  const display = document.getElementById("right");
  display.innerText = text;

  // Tambahkan kelas animasi dan hapus setelah selesai
  display.classList.add("animate");
  setTimeout(() => {
    display.classList.remove("animate");
  }, 300);

  document.getElementById("sfx").play();
}


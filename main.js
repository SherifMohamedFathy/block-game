let player = document.querySelector(".player");
let block = document.querySelector(".block");
let score = 0;
let scoreElement = document.querySelector(".score");

function moveLeft() {
  let curLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if (curLeft <= 0) return;
  let newLeft = curLeft - 100;
  player.style.left = newLeft + "px";
}

function moveRight() {
  let curLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if (curLeft >= 200) return;

  let newLeft = curLeft + 100;
  player.style.left = newLeft + "px";
}
document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") moveLeft();
  else if (event.key == "ArrowRight") moveRight();
});

block.addEventListener("animationiteration", () => {
  let readpos = Math.floor(Math.random() * 3) * 100;
  block.style.left = readpos + "px";
  score++;
  scoreElement.innerHTML = `score: ${score}`;
});
setInterval(() => {
  let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  if (playerLeft == blockLeft && blockTop > 310 && blockTop < 450) {
    alert(`Game Over !!! \n your score: ${score}`);
    block.style.top = -100 + "px";
    score = 0;
    location.reload();
  }
}, 1);

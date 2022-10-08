
// let character = document.querySelector("#character")
// let bolder = document.querySelector(".bolder")
// function jump() {
//   if (character.classList != "jump") {
//     character.classList.add("jump")
//   setTimeout(function () {
//     character.classList.remove("jump")
//   }, 500)}
// }

// function duck() {
//   if (character.className != "jump") {
//     character.classList.add("duck")
//     setTimeout(function () {
//       character.classList.remove("duck");
//     }, 300);
//   }
// }

// document.addEventListener("keydown", e => {
//   switch (e.keyCode) {
//     case 38: jump();
//       break;
//     case 40: duck();
//       break;
//   }
// })


const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const playerImage = new Image()
playerImage.src = './img/shadow_dog.png'


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(playerImage, 0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
  requestAnimationFrame(animate)
}
animate()

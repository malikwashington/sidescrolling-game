let playerState = "idle"
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700
let gameSpeed = 5
let gameFrame = 0;

const backgroundLayer1 = new Image()
backgroundLayer1.src= "./img/layer-1.png"
const backgroundLayer2 = new Image()
backgroundLayer2.src= "./img/layer-2.png"
const backgroundLayer3 = new Image()
backgroundLayer3.src= "./img/layer-3.png"
const backgroundLayer4 = new Image()
backgroundLayer4.src= "./img/layer-4.png"
const backgroundLayer5 = new Image()
backgroundLayer5.src = "./img/layer-5.png"

window.addEventListener('load', function () {
  const slider = document.querySelector('#slider')
  // slider.value = gameSpeed
  const showGameSpeed = document.getElementById('showGameSpeed')
  showGameSpeed.innerHTML = gameSpeed
  slider.addEventListener('change', function (e) {
    gameSpeed = e.target.value
    showGameSpeed.innerHTML = e.target.value
  })
  class Layer {
    constructor(image, speedModifier) {
      this.x = 0
      this.y = 0
      this.width = 2400
      this.height = 700
      this.image = image
      this.speedModifier = speedModifier
      this.speed = gameSpeed * this.speedModifier
    }
    update() {
      this.speed = gameSpeed * this.speedModifier
      this.x = gameFrame * this.speed % this.width
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
  }

const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.4)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)

const gameObjects = [layer1, layer2, layer3, layer4, layer5]

function animateBackgrounds() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  gameObjects.forEach(object => {
    object.update()
    object.draw()
  })
  gameFrame--
  requestAnimationFrame(animateBackgrounds)
}
  animateBackgrounds()
}
)

const playerImage = new Image()
playerImage.src = './img/shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523
const staggerFrames = 5
const spriteAnimations = []
const animationStates = [
  {
    name: 'idle',
    frames: 7,
    },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'fall',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'dizzy',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'ko',
    frames: 12,
  },
  {
    name: 'getHit',
    frames: 4,
  },
]
animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  }
  for (let j = 0; j < state.frames; j++){
    let positionX = j * spriteWidth
    let positionY = index * spriteHeight
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames
})

function animate() {
  // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length
  let frameX = spriteWidth * position
  let frameY= spriteAnimations[playerState].loc[position].y
  //drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(playerImage, frameX, frameY,
    spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
  
  gameFrame++ 
  requestAnimationFrame(animate)
}
// animate()




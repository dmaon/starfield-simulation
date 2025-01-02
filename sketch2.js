const worldWidth = 800
const worldHeight = 800
const baseRadius = 5
const secondRadius = baseRadius * 300
let stars = []


function drawBaseCircles() {
  fill(255, 255, 255);
  noFill()
  stroke(255)
  ellipse(worldWidth / 2, worldHeight / 2, baseRadius, baseRadius);
  ellipse(worldWidth / 2, worldHeight / 2, secondRadius, secondRadius);
}

function getStartPoints() {
  let result = []
  let x2, y2

  for (let i = -360; i <= 360; i++) {
    x2 = (worldWidth / 2) + (baseRadius / 2 * Math.cos(i * (Math.PI / 180)))
    y2 = (worldHeight / 2) + (baseRadius / 2 * Math.sin(i * (Math.PI / 180)))
    result.push([x2, y2, i])
  }

  return result
}

function addStars(count) {
  fill(255)

  let points = getStartPoints()
  for (let i = 0; i < count; i++) {

    randomPoint = points[Math.floor(Math.random() * (abs(points.length - 1)))]
    randomX = randomPoint[0]
    randomY = randomPoint[1]
    randomAngle = randomPoint[2]
    randomDistance = Math.floor(Math.random() * 2) + 1
    randomSpeed = Math.floor(Math.random()) + 0.0009

    stars.push(
      {
        startX: randomX,
        startY: randomY,
        endX: (worldWidth / 2) + (secondRadius / 2 * Math.cos(randomAngle * (Math.PI / 180))),
        endY: (worldHeight / 2) + (secondRadius / 2 * Math.sin(randomAngle * (Math.PI / 180))),
        distance: randomDistance,
        interpolationFactor: 0,
        speed: randomSpeed,
      }
    )


  }
}

function setup() {
  createCanvas(worldWidth, worldHeight);
  background(0);

  drawBaseCircles()

  addStars(100)

  // ellipse(stars[0].x, stars[0].y, stars[0].d, stars[0].d);

}


function draw() {
  background(0);

  stars.forEach(star => {

    let currentX = lerp(star.startX, star.endX, star.interpolationFactor);
    let currentY = lerp(star.startY, star.endY, star.interpolationFactor);

    ellipse(currentX, currentY, star.distance, star.distance);

    if (star.interpolationFactor < 1) {
      star.interpolationFactor += star.speed;
      star.distance += 0.0001;
    }
  })

  if (Math.random() > 0.7)
    addStars(1)
}
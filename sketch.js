let stars = []
const starsCount = 4000

function setup() {
    createCanvas(screen.width, screen.height)

    for (var i = 0; i < starsCount; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(0)
    translate(width / 2, height / 2);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].show()
    }
}

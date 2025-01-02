class Star {
    constructor() {
        this.epsilon = 0.000001
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
    }


    update() {
        this.z = this.z - 1;
        if (this.z < 1) {
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = random(width);
        }
    }

    show() {

        let sx = map((this.x / (this.z + this.epsilon) * 0.5), 0, 1, 0, width);
        let sy = map((this.y / (this.z + this.epsilon) * 0.5), 0, 1, 0, height);

        let r = map(this.z, 0, width, 6, 0);

        fill(200);
        ellipse(sx, sy, r, r);
    }

}
/* eslint-disable no-undef */
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    // drop = new Drop(width/2, height/2);
    for (var i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }
    }

    var edge = false;

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }
    }

    if (edge) {
        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for (var i = drops.length - 1; i >= 0; i--) {
        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }
}

function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(ship.x, height);
        drops.push(drop);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}

function Ship() {
    this.x = width / 2;
    this.xdir = 0;

    this.show = function () {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 60);
    };

    this.setDir = function (dir) {
        this.xdir = dir;
    };

    this.move = function (dir) {
        this.x += this.xdir * 5;
    };
}

function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 30;

    this.xdir = 1;

    this.grow = function () {
        this.r = this.r + 2;
    };

    this.shiftDown = function () {
        this.xdir *= -1;
        this.y += this.r;
    };

    this.move = function () {
        this.x = this.x + this.xdir;
    };

    this.show = function () {
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };
}

function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = function () {
        noStroke();
        fill(150, 0, 255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    };

    this.evaporate = function () {
        this.toDelete = true;
    };

    this.hits = function (flower) {
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r) {
            return true;
        } else {
            return false;
        }
    };

    this.move = function () {
        this.y = this.y - 5;
    };
}

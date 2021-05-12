import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import React from 'react';
import perso from '../../icons/perso.png';
import elonHead from '../../icons/elonhead.png';
import mars from '../../icons/2k_mars.jpg';
import laser from '../../sound/laser.mp3';
import elonCry from '../../sound/elonCry.mp3';
import persoCry from '../../sound/persoCry.mp3';
import useSound from 'use-sound';

import './Game.scss';

class Shoot {
    constructor(p, y, elon) {
        this.x = elon ? p.windowWidth - 100 : 100;
        this.p = p;
        this.y = y;
        this.elon = elon;
        this.toDelete = false;
    }

    render() {
        this.elon ? this.p.fill(255) : this.p.fill(0, 0, 255);
        this.p.rect(this.x, this.y, 10, 5);
    }

    evaporate() {
        this.toDelete = true;
    }

    move() {
        this.x += this.elon ? -8 : 8;
    }
}
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    Sketch = (p) => {
        let img;
        let img2;
        let imgBackground;

        let persoX = 50;
        let elonX = p.windowWidth - 100;
        let elonY = p.windowHeight / 2;
        let elonDir = 1;
        let persoShoot = [];
        let elonShoot = [];
        let canShoot = true;
        let elonCanShoot = true;
        let elonTouched = 0;
        let persoTouched = 0;
        let elonLoose = false;
        let persoLoose = false;
        let gameFinished = false;
        let start = true;

        p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
            img = p.loadImage(perso);
            img2 = p.loadImage(elonHead);
            imgBackground = p.loadImage(mars);
            persoShoot = [];
            elonShoot = [];
            canShoot = true;
            elonCanShoot = true;
            elonTouched = 0;
            persoTouched = 0;
            elonLoose = false;
            persoLoose = false;
            gameFinished = false;
            start = true;
        };

        p.draw = () => {
            if (gameFinished) {
                p.noLoop();
            }
            if (start) {
                p.background(imgBackground);

                p.textSize(100);
                p.text('Fight Elon Musk !', 350, 500);
                setTimeout(() => {
                    start = false;
                }, 2000);
            }
            if (!persoLoose && !elonLoose && !start && !gameFinished) {
                moveElon();
                p.background(imgBackground);
                p.image(img2, elonX, elonY);
                p.image(img, persoX, p.mouseY);

                //move perso shoots
                for (var i = 0; i < persoShoot.length; i++) {
                    persoShoot[i].render();
                    persoShoot[i].move();

                    if (
                        persoShoot[i].x >= elonX &&
                        persoShoot[i].x <= elonX + 50 &&
                        persoShoot[i].y >= elonY &&
                        persoShoot[i].y <= elonY + 50
                    ) {
                        elonTouched++;
                        persoShoot[i].evaporate();
                    }
                    if (persoShoot[i].x > p.windowWidth - 70) {
                        persoShoot[i].evaporate();
                    }
                }

                //remove shots
                for (i = persoShoot.length - 1; i >= 0; i--) {
                    if (persoShoot[i].toDelete) {
                        persoShoot.splice(i, 1);
                    }
                }

                //move elon shoots
                for (i = 0; i < elonShoot.length; i++) {
                    elonShoot[i].render();
                    elonShoot[i].move();

                    if (
                        elonShoot[i].x >= persoX &&
                        elonShoot[i].x <= persoX + 50 &&
                        elonShoot[i].y >= p.mouseY &&
                        elonShoot[i].y <= p.mouseY + 60
                    ) {
                        persoTouched++;
                        elonShoot[i].evaporate();
                    }
                    if (elonShoot[i].x < 30) {
                        elonShoot[i].evaporate();
                    }
                }

                for (i = elonShoot.length - 1; i >= 0; i--) {
                    if (elonShoot[i].toDelete) {
                        elonShoot.splice(i, 1);
                    }
                }

                if (elonTouched === 3) {
                    elonLoose = true;
                }
                if (persoTouched === 3) {
                    persoLoose = true;
                }
            } else if (elonLoose && !gameFinished) {
                p.fill(255);
                p.textSize(100);
                p.text('You win !!!', 500, 500);
                gameFinished = true;

                setTimeout(() => {
                    this.props.killMusk();
                    this.props.stopGame();
                }, 1000);
            } else if (persoLoose && !gameFinished) {
                p.fill(255);
                p.textSize(100);
                p.text('You lose... Elon lolz!!!', 500, 500);
                gameFinished = true;
                setTimeout(() => {
                    this.props.killPerso();
                    this.props.stopGame();
                }, 1000);
            }
        };

        function moveElon() {
            if (elonY > p.windowHeight - 50) {
                elonDir = 0;
            } else if (elonY < 50) {
                elonDir = 1;
            }

            if (elonDir) {
                elonY += 7;
            } else {
                elonY -= 7;
            }

            if (elonCanShoot && !elonLoose) {
                elonShoot.push(new Shoot(p, elonY, true));
                elonCanShoot = false;
                setTimeout(() => (elonCanShoot = true), Math.floor(Math.random() * 800) + 200);
            }
        }

        p.mouseClicked = () => {
            if (canShoot && !persoLoose) {
                persoShoot.push(new Shoot(p, p.mouseY, false));
                canShoot = false;
                setTimeout(() => (canShoot = true), 500);
            }
        };
    };

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current);
    }

    componentDidUpdate() {
        // TODO: cleanup old sketches
        new p5(this.Sketch, this.myRef.current);
    }
    render() {
        return <div className='game' ref={this.myRef}></div>;
    }
}

export default Game;

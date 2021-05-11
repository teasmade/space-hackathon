import p5 from 'p5';
import React from 'react';
import perso from '../../icons/perso.png';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let img;
    let elonY = p.windowHeight / 2;
    let elonDir = 1;

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      img = p.loadImage(perso);
    };

    p.draw = () => {
      moveElon();
      p.background(0);

      p.fill(255);
      p.rect(p.windowWidth - 100, elonY, 50, 50);
      p.image(img, 50, p.mouseY);
    };

    function moveElon() {
      if (elonY > p.windowHeight - 50) {
        elonDir = 0;
      } else if (elonY < 50) {
        elonDir = 1;
      }

      if (elonDir) {
        elonY += 5;
      } else {
        elonY -= 5;
      }
    }

    p.mouseClicked = () => {
      if (p.mouseX > 150) {
        this.props.cool();
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Game;

import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import Game from './components/Game/Game';
import './App.scss';
import PlanetsGrid from './components/Universe/PlanetsGrid';
import { useEffect, useRef, useState } from 'react';

import ParallaxMousemove from 'react-parallax-mousemove';

import fondEtoile from './assets/images/fondetoile.jpg';
import galaxy from './assets/images/galaxy.png';

/* import PlanetsGrid from './components/Universe/PlanetsGrid'; */

function App() {
  const style = {
    fondetoile: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    galaxylayer: {
      background: 'center center/cover',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    },
    gridlayer: {
      width: '100%',
      position: 'relative',
      top: '-100%',
      overflow: 'hidden',
      height: '100%',
    },
    bgLayerStyle: {
      position: 'absolute',
      transform: 'translateY(2%)',
    },
  };
  const cool = () => {
    console.log('super');
  };
  // return <Game cool={cool}></Game>;
  const [showText, setShowText] = useState(true);
  const [opacifyText, setOpacifyText] = useState(true);
  useEffect(() => {
    if (showText) {
      setTimeout(() => {
        setOpacifyText(false);
        setTimeout(() => {
          setShowText(false);
        }, 3000);
      }, 15000);
    }
  }, [showText]);
  const handleKeyDown = (e) => {
    console.log(e);
    if (e.code === 'Space') {
      e.target.className = 'crawlerContainer opacify';
      setTimeout(() => {
        e.target.className = 'crawlerContainer noShowCrawl';
      }, 3000);
    }
  };
  const divRef = useRef();
  useEffect(() => {
    divRef.current.focus();
  }, []);
  return (
    <div className='App'>
      <div
        onKeyDown={(e) => handleKeyDown(e)}
        tabIndex={-1}
        ref={divRef}
        className={`crawlerContainer ${showText ? '' : 'noShowCrawl'} ${
          opacifyText ? '' : 'opacify'
        }`}
      >
        <div className='crawler-skip'>Press space to skip intro</div>
        <div className='crawlerBackdrop'>
          <Crawl
            title='Episode 2021'
            subTitle='To the Moon!'
            text="It is a period of coding war. Rebel devs, striking from a hidden base, attempt to win their first victory against the Elon Galactic Empire. Through cunning hacking, they steal secret plans to Musk's ultimate weapon, the DOGE STAR, an imaginary space station with enough $ to destroy all teh economies. Our 1337 heroes are the only geeks left that can save the peoplez and restore freedom to the galaxy…"
          />
        </div>
      </div>
      <div>
        <ParallaxMousemove containerStyle={style.fondetoile} fullHeight={true}>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.05,
              yFactor: 0.02,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <img
              src={fondEtoile}
              style={{
                width: '110vw',
                height: '110vh',
                transform: 'translateX(-5%) ',
              }}
              alt='Parallax Layer'
            ></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.galaxylayer}
            config={{
              xFactor: 0.05,
              yFactor: 0.03,
              springSettings: {
                stiffness: 30,
                damping: 20,
              },
            }}
          >
            <img src={galaxy} alt='Parallax Layer'></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.gridlayer}
            config={{
              xFactor: 0.02,
              yFactor: 0.01,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <PlanetsGrid></PlanetsGrid>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.bigLayerStyle}
            config={{
              xFactor: 0.3,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          ></ParallaxMousemove.Layer>
        </ParallaxMousemove>
      </div>
    </div>
  );
}

export default App;

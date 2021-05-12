import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import Game from './components/Game/Game';
import './App.scss';
import PlanetsGrid from './components/Universe/PlanetsGrid';
import { useEffect, useRef, useState } from 'react';
import Parallax from './components/Parallax/Parallax.jsx';

/* import PlanetsGrid from './components/Universe/PlanetsGrid'; */

function App() {
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
      <PlanetsGrid></PlanetsGrid>
      <Parallax />
      
    </div>
  );
}

export default App;

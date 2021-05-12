import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import Game from './components/Game/Game';
import './App.scss';
import PlanetsGrid from './components/Universe/PlanetsGrid';
import { useEffect, useState } from 'react';

function App() {
  const [showText, setShowText] = useState(true);
  const [opacifyText, setOpacifyText] = useState(true);
  const [playGame, setPlayGame] = useState(false);
  const [nbMuskKilled, setNbMuskKilled] = useState(0);
  const [nbDeath, setNbDeath] = useState(0);
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
  return (
    <div className='App'>
      <div
        className={`crawlerContainer ${showText ? '' : 'noShowCrawl'} ${
          opacifyText ? '' : 'opacify'
        }`}
      >
        <div className='crawlerBackdrop'>
          <Crawl
            title='Episode 2021'
            subTitle='To the Moon!'
            text="It is a period of coding war. Rebel devs, striking from a hidden base, attempt to win their first victory against the Elon Galactic Empire. Through cunning hacking, they steal secret plans to Musk's ultimate weapon, the DOGE STAR, an imaginary space station with enough $ to destroy all teh economies. Our 1337 heroes are the only geeks left that can save the peoplez and restore freedom to the galaxy…"
          />
        </div>
      </div>
      {playGame ? (
        <Game
          killMusk={() => setNbMuskKilled(nbMuskKilled + 1)}
          killPerso={() => {
            setNbDeath(nbDeath + 1);
          }}
          stopGame={() => setPlayGame(false)}
        />
      ) : null}
      <PlanetsGrid></PlanetsGrid>
    </div>
  );
}

export default App;

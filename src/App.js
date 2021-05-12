import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import Game from './components/Game/Game';
import './components/Game/Game.scss';
import './App.scss';
import PlanetsGrid from './components/Universe/PlanetsGrid';
import { createRef, useEffect, useState } from 'react';

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
            background: 'center cover',
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
            }, 22000);
        }
    }, [showText]);
    const handleKeyDown = (e) => {
        if (e.code === 'Space') {
            e.target.className = 'crawlerContainer opacify';
            setTimeout(() => {
                e.target.className = 'crawlerContainer noShowCrawl';
            }, 3000);
        }
    };

    const divRef = createRef();
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
                        text="It is a period of Coding War. Rebel devs attempt to win a victory against the Elon Galactic Empire. Through clever hacking, they learn of Musk's plans to create the DOGE STAR, an imaginary weapon with enough $$$$ to destroy whole planets. Our heroes are the only geeks left who can stop Elon and save the galaxy…"
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
                        <PlanetsGrid
                            win={nbMuskKilled ? true : false}
                            loose={nbDeath ? true : false}
                            startGame={() => setPlayGame(true)}
                        ></PlanetsGrid>{' '}
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

            {playGame ? (
                <Game
                    killMusk={() => setNbMuskKilled(nbMuskKilled + 1)}
                    killPerso={() => {
                        setNbDeath(nbDeath + 1);
                    }}
                    stopGame={() => setPlayGame(false)}
                />
            ) : null}
        </div>
    );
}

export default App;

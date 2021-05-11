import './App.scss';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar.jsx';
import PlanetsGrid from './components/Universe/PlanetsGrid';
import React from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import ScriptTag from 'react-script-tag';

function App() {
    return (
        <div className='App'>
            <ScriptTag type='text/javascript' src='./sketch.js' />
            <Crawl
                title='Episode 2021'
                subTitle='To the Moon!'
                text="It is a period of coding war. Rebel devs, striking from a hidden base, attempt to win their first victory against the Elon Galactic Empire. Through cunning hacking, they steal secret plans to Musk's ultimate weapon, the DOGE STAR, an imaginary space station with enough $ to destroy all teh economies. Our 1337 heroes are the only geeks left that can save the peoplez and restore freedom to the galaxy…"
            />
            <TopBar />
            <div className='gridWrapper'>
                <SideBar side='sideBarLeft' />
                <PlanetsGrid></PlanetsGrid>
                <SideBar side='sideBarRight' />
            </div>
            <BottomBar />
        </div>
    );
}

export default App;

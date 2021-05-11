import './App.scss';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar.jsx';
import PlanetsGrid from './components/Universe/PlanetsGrid';

function App() {
    return (
        <div className='App'>
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

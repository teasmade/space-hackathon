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
                <SideBar />
                <PlanetsGrid></PlanetsGrid>
                <SideBar />
            </div>
            <BottomBar />
        </div>
    );
}

export default App;

import { useEffect, useState } from 'react';
import './Popup.scss';

const Popup = ({
    show,
    click,
    coordinates,
    planet,
    clickVisitPlanet,
    distance,
    setFuel,
    fuel,
    startGame,
}) => {
    const [coordinateToDisplay, setCoordinateToDisplay] = useState({
        left: 0,
        top: 0,
    });
    const [coolButton, setCoolButton] = useState(null);

    const placePopup = () => {
        //place popup to avoid it to overflow
        let top = null;
        let left = null;

        if (coordinates[0] > window.innerWidth - 150) {
            left = coordinates[0] - 150;
        } else {
            left = coordinates[0];
        }

        if (coordinates[1] > window.innerHeight - 300) {
            top = coordinates[1] - 300;
        } else {
            top = coordinates[1];
        }

        setCoordinateToDisplay({ left: left, top: top });
    };

    const prepareButton = () => {
        let buttonToDisplay = null;
        if (planet && !planet.preVisited && !planet.visited) {
            buttonToDisplay = (
                <button
                    className='visitOrInteract'
                    onClick={() => {
                        clickVisitPlanet(planet && planet.id);
                    }}
                >
                    Visit {planet && planet.name}
                </button>
            );
        } else if (planet && planet.preVisited && !planet.visited) {
            if (planet.type === 'OIL') {
                let oil = Math.floor(Math.random() * 400) + 300;
                setFuel(oil + fuel > 3000 ? 3000 : oil + fuel);
                buttonToDisplay = <div>You find a nice stock of Doge ! Dogecoin found : {oil}</div>;
            } else if (planet.type === 'ELON_MUSK') {
                setTimeout(() => startGame(), 2000);

                buttonToDisplay = <div>You found Elon Musk !! You must stop him !</div>;
            } else buttonToDisplay = <div>Sadly, this planet is empty.</div>;
        } else if (planet && planet.preVisited && planet.visited) {
            buttonToDisplay = <div>You have already visited {planet && planet.name}</div>;
        }
        setCoolButton(buttonToDisplay);
    };

    useEffect(() => {
        prepareButton();
        placePopup();
    }, []);

    return (
        <>
            <div className={`popupContainer ${show ? 'show' : ''}`} onClick={click}></div>
            <div
                className={`popup ${show ? 'showPop' : ''}`}
                style={{
                    left: coordinateToDisplay.left,
                    top: coordinateToDisplay.top,
                    position: 'absolute',
                }}
            >
                <div className='popupContentContainer'>
                    <div>Planet name : </div>
                    <div className='title'>
                        <h1 className='nomPlanete'>{planet ? planet.name : null}</h1>
                    </div>
                    <div className='description'>{planet ? planet.description : null}</div>
                    <div>Distance : {distance}</div>
                    {coolButton}
                </div>
            </div>
        </>
    );
};

export default Popup;

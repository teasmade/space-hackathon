import { useEffect, useState } from 'react';
import './Popup.scss';

const Popup = ({ show, click, coordinates, planet, clickVisitPlanet }) => {
  const [coordinateToDisplay, setCoordinateToDisplay] = useState({
    left: 0,
    top: 0,
  });

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
    return planet && !planet.visited ? (
      <button
        className='visitOrInteract'
        onClick={() => clickVisitPlanet(planet && planet.id)}
      >
        Visit {planet && planet.name}
      </button>
    ) : (
      <div>You have already visited {planet && planet.name}</div>
    );
  };

  useEffect(() => {
    placePopup();
  }, [coordinates]);

  return (
    <>
      <div
        className={`popupContainer ${show ? 'show' : ''}`}
        onClick={click}
      ></div>
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
          <div className='description'>
            {planet ? planet.description : null}
          </div>
          {prepareButton()}
        </div>
      </div>
    </>
  );
};

export default Popup;

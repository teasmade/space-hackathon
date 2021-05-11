import PlanetItem from './PlanetItem';
import Popup from './Popup/Popup';
import planetList from '../../planetList';
import './PlanetsGrid.scss';
import { ReactComponent as Planet0 } from '../../icons/planet0.svg';
import { ReactComponent as Planet1 } from '../../icons/planet1.svg';
import { ReactComponent as Planet2 } from '../../icons/planet2.svg';
import { ReactComponent as Planet3 } from '../../icons/planet3.svg';
import { ReactComponent as Planet4 } from '../../icons/planet4.svg';
import { ReactComponent as Planet5 } from '../../icons/planet5.svg';
import { ReactComponent as Planet6 } from '../../icons/planet6.svg';
import { ReactComponent as Planet7 } from '../../icons/planet7.svg';
import { ReactComponent as Planet8 } from '../../icons/planet8.svg';
import { ReactComponent as Planet9 } from '../../icons/planet9.svg';
import { useEffect, useState } from 'react';

const PlanetsGrid = ({ dataReady, setData }) => {
  let listPlanetWithContent = planetList;
  const gridItems = new Array(400).fill({ isPlanet: false });
  const [gridItemsToDisplay, setGridItemsToDisplay] = useState([]);
  const [isPopupShown, setIsPopupShown] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState([null, null]);
  const [planetVisiting, setPlanetVisiting] = useState(null);

  const iconsArray = [
    Planet0,
    Planet1,
    Planet2,
    Planet3,
    Planet4,
    Planet5,
    Planet6,
    Planet7,
    Planet8,
    Planet9,
  ];

  const preparePlanetsData = () => {
    //here we take the planet list, and we add elon musks and oil on random ones
    let elonMuskNumber = 0;
    let oilNumber = 0;

    //add elon musk on planet
    while (elonMuskNumber < 10) {
      const planetIndex = Math.floor(Math.random() * 50);
      if (listPlanetWithContent[planetIndex].type === null) {
        listPlanetWithContent[planetIndex].type = 'ELON_MUSK';
        elonMuskNumber++;
      }
    }

    //add oil on planets
    while (oilNumber < 10) {
      const planetIndex = Math.floor(Math.random() * 50);
      if (listPlanetWithContent[planetIndex].type === null) {
        listPlanetWithContent[planetIndex].type = 'OIL';
        oilNumber++;
      }
    }
  };

  const createPlanetGrid = () => {
    //here we take the gridItems (20*20 grid) and we randomly put some of the 50 planets inside
    let i = 0;

    while (i < listPlanetWithContent.length) {
      const random = Math.floor(Math.random() * 399) + 1;
      if (!gridItems[random].isPlanet) {
        gridItems[random] = listPlanetWithContent[i];
        gridItems[random].isPlanet = true;
        i++;
      }
    }

    setGridItemsToDisplay(
      gridItems.map((item, index) => (
        <PlanetItem
          key={index}
          planetType={item && item.isPlanet ? item.type : null}
          isPlanet={item && item.isPlanet}
          click={(event) => showPopup(event, item)}
        >
          {item.isPlanet ? iconsArray[Math.floor(Math.random() * 10)] : null}
        </PlanetItem>
      ))
    );
  };

  const showPopup = (event, item) => {
    console.log('event', event);
    setMouseCoordinates([event.clientX, event.clientY]);
    setPlanetVisiting(item);
    setIsPopupShown(true);
  };

  useEffect(() => {
    preparePlanetsData();
    createPlanetGrid();
  }, []);

  return (
    <div className='gridContainer'>
      <Popup
        show={isPopupShown}
        click={() => setIsPopupShown(false)}
        coordinates={mouseCoordinates}
        planet={planetVisiting}
      />
      <div className='planetGrid'>{gridItemsToDisplay}</div>
    </div>
  );
};
export default PlanetsGrid;

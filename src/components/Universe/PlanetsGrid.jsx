import PlanetItem from './PlanetItem';
import './PlanetsGrid.css';

const PlanetsGrid = () => {
  const gridItems = [];

  for (let i = 0; i < 400; i++) {
    const random = Math.floor(Math.random() * 11);

    gridItems.push(
      <PlanetItem isPlanet={random >= 9 ? true : false} key={i}></PlanetItem>
    );
  }
  return <div className='planetGrid'>{gridItems}</div>;
};

export default PlanetsGrid;

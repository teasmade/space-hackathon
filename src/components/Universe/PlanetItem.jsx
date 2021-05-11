const PlanetItem = ({ isPlanet }) => {
  function randomTranslate() {
    var yes = Math.random();
    return yes < 0.5
      ? Math.floor(Math.random() * 15)
      : Math.floor(Math.random() * 15) * -1;
  }
  const style = {
    transform: `translate(${randomTranslate()}px, ${randomTranslate()}px)`,
  };
  return (
    <div className='planetGridItem'>
      <div className={`${isPlanet ? 'planet' : null}`} style={style}></div>
    </div>
  );
};

export default PlanetItem;

const PlanetItem = ({ isPlanet, children }) => {
  const PlanetIcon = children;
  console.log('PlanetIcon', PlanetIcon);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomTranslate() {
    var yes = Math.random();
    return yes < 0.5
      ? Math.floor(Math.random() * 15)
      : Math.floor(Math.random() * 15) * -1;
  }
  const style = {
    transform: `translate(${randomTranslate()}px, ${randomTranslate()}px) rotate(${Math.floor(
      Math.random() * 360
    )}deg)`,
  };

  return (
    <div className='planetGridItem'>
      <div className={`${isPlanet ? 'planet' : null}`} style={style}>
        {isPlanet ? (
          <PlanetIcon
            className='planetIcon'
            stroke={`${getRandomColor()}`}
            strokeWidth='2'
          />
        ) : null}
      </div>
    </div>
  );
};

export default PlanetItem;

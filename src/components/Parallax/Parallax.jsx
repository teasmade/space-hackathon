import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

import fondEtoile from '../../assets/images/fondetoile.jpg';
import galaxy from '../../assets/images/galaxy.png';

class Parallax extends React.Component {
  render() {
    const style = {
      outter: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      },
      infoLayerStyle: {
        background: 'center center/cover',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      },
      bgLayerStyle: {
        position: 'absolute',
        height: '100%',
      },
    };

    return (
      <div>
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.05,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <img src={fondEtoile} alt='Parallax Layer'></img>
          </ParallaxMousemove.Layer>
          <div style={style.infoLayerStyle}>
            <ParallaxMousemove.Layer
              layerStyle={style.infoLayerStyle}
              config={{
                xFactor: 0.2,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30,
                },
              }}
            >
              <img src={galaxy} alt='Parallax Layer'></img>
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
          </div>
        </ParallaxMousemove>
      </div>
    );
  }
}

export default Parallax;

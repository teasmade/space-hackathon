import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import background from '../../assets/images/background.jpg';
import bg1 from '../../assets/images/bg1.png';
import bg2 from '../../assets/images/bg7.png';
import bg3 from '../../assets/images/bg3.png';
import bg4 from '../../assets/images/bg4.png';
import bg5 from '../../assets/images/bg5.png';
import bg6 from '../../assets/images/bg6.png';
import bg7 from '../../assets/images/bg7.png';

class Parallax extends React.Component {
  render() {
    const style = {
      outter: {
        background: 'radial-gradient(50% 150%, #6CD7E8 50%, #59C2D3 100%)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      },
      inner: {
        width: 700,
        height: 500,
        position: 'absolute',
        margin: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
      },
      header: {
        fontFamily: 'Open Sans Condensed',
        textTransform: 'uppercase',
        color: 'white',
        textShadow: '0px 0px 2px #43AABA',
        fontSize: '50px',
        marginTop: '35px',
        fontWeight: 600,
      },
      paragraph: {
        fontFamily: 'Roboto',
        fontSize: '20px',
        color: 'white',
        letterSpacing: '0.62px',
        lineHeight: '30px',
        fontWeight: 300,
      },
      button: {
        fontFamily: 'Roboto',
        borderRadius: '100px',
        background: '#247B8A',
        textDecoration: 'none',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        marginTop: '40px',
        fontWeight: 100,
        display: 'block',
      },
      infoLayerStyle: {
        position: 'relative',
        marginTop: '-60px',
      },
      bgLayerStyle: {
        position: 'absolute',
        height: '100%',
        transform: 'translate(-15%, 17%)',
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
            <img src={background} alt='Parallax Layer'></img>
            <p>Hello</p>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.15,
              yFactor: 0,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <img src={bg5} alt='Parallax Layer'></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.25,
              yFactor: 0.025,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <img src={bg7} alt='Parallax Layer'></img>
          </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer
            layerStyle={style.bgLayerStyle}
            config={{
              xFactor: 0.4,
              yFactor: 0.05,
              springSettings: {
                stiffness: 50,
                damping: 30,
              },
            }}
          >
            <img src={bg6} alt='Parallax Layer'></img>
          </ParallaxMousemove.Layer>
          <div style={style.inner}>
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
              <img src={bg1} alt='Parallax Layer'></img>
              <p>Helo</p>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              layerStyle={style.infoLayerStyle}
              config={{
                xFactor: 0.3,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30,
                },
              }}
            >
              <img src={bg2} alt='Parallax Layer'></img>
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              layerStyle={style.infoLayerStyle}
              config={{
                xFactor: 0.4,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30,
                },
              }}
            >
              <img src={bg3} alt='Parallax Layer'></img>
            </ParallaxMousemove.Layer>
          </div>
        </ParallaxMousemove>
      </div>
    );
  }
}

export default Parallax;

import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl'

// tslint:disable-next-line:no-var-requires
import data from '../heatMapData.json'
// tslint:disable-next-line:no-var-requires
const token = `pk.eyJ1IjoiYXpoYXJpZSIsImEiOiJjamQ5cjVmYnMyYWs1MzNsYm5nNjY0cGg3In0.dUboQUB7N3Nhk2Ot1zBFMQ`

const styles = {
  dark: 'mapbox://styles/mapbox/dark-v9'
} 

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  flex: 1
};


const layerPaint = {
  'heatmap-weight': {
    property: 'API',
    type: 'exponential',
    stops: [
      [0, 0],
      [5, 2]
    ]
  },
  'heatmap-radius': 40
};


class Heatmap extends Component {
  constructor() {
    super()
    this.state = {
      center: [126.07014059, -3.2333765]
    } 

  }
  render () {
    console.log(Feature)
    return (
      <div>
      <Map
        center={this.state.center}
        zoom={[5]}
        style={styles.dark}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
          <Layer type="heatmap" paint={layerPaint}>
          {data.map((el, index) => (
              <Feature 
                key={index} 
                coordinates={el.latlng} 
                properties={el} 
            />
          ))}
        </Layer>
      </Map>
    </div>
      
    );
  }
  
}

export default Heatmap
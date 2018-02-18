import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from '../../../';
import { Component } from 'react';

// tslint:disable-next-line:no-var-requires
import data from './heatmapData.json'
// tslint:disable-next-line:no-var-requires
const { token, styles } = ('./config.json');

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  flex: 1
};

// export  Props {
//   // tslint:disable-next-line:no-any
//   onStyleLoad?: (map: any) => any;
// }

const layerPaint = {
  'heatmap-weight': {
    property: 'priceIndicator',
    type: 'exponential',
    stops: [
      [0, 0],
      [5, 2]
    ]
  },
  // Increase the heatmap color weight weight by zoom level
  // heatmap-ntensity is a multiplier on top of heatmap-weight
  'heatmap-intensity': {
    stops: [
      [0, 0],
      [5, 1.2]
    ]
  },
  // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
  // Begin color ramp at 0-stop with a 0-transparancy color
  // to create a blur-like effect.
  'heatmap-color': {
    stops: [
      [0, 'rgba(33,102,172,0)'],
      [0.25, 'rgb(103,169,207)'],
      [0.5, 'rgb(209,229,240)'],
      [0.8, 'rgb(253,219,199)'],
      [1, 'rgb(239,138,98)'],
      [2, 'rgb(178,24,43)']
    ]
  },
  // Adjust the heatmap radius by zoom level
  'heatmap-radius': {
    stops: [
      [0, 1],
      [5, 50]
    ]
  }
};

export default class Heatmap extends Component {
  constructor() {
    super()
    this.state = {
      center: [-0.109970527, 51.52916347]
    }
  }

  // _onStyleLoad = (map:  ) => {
  //   const { onStyleLoad } = this.props;
  //   return onStyleLoad && onStyleLoad(map);
  // };

  render() {
    return (
      <Map
        style={styles.dark}
        center={this.center}
        containerStyle={mapStyle}
      >
        <Layer
          type="heatmap"
          paint={layerPaint as any}
        >
          {
            data.map((el) => (
              <Feature
                coordinates={el.latlng}
                properties={el}
              />
            ))
          }
        </Layer>
      </Map>
    );
  }
}
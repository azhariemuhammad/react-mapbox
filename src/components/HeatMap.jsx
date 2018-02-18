import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

// tslint:disable-next-line:no-var-requires
import data from '../heatMapData.json'
// tslint:disable-next-line:no-var-requires
const token = `pk.eyJ1IjoiYXpoYXJpZSIsImEiOiJjamQ5cjVmYnMyYWs1MzNsYm5nNjY0cGg3In0.dUboQUB7N3Nhk2Ot1zBFMQ`
console.log(token)

const styles = {
  dark: 'mapbox://styles/mapbox/dark-v9'
} 

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  flex: 1
};

// const Props =  {
//   /* eslint-disable-next-line:no-any */
//   onStyleLoad: (map: any) => any
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
  // 'heatmap-color': {
  //   stops: [
  //     [0, 'rgba(33,102,172,0)'],
  //     [0.25, 'rgb(103,169,207)'],
  //     [0.5, 'rgb(209,229,240)'],
  //     [0.8, 'rgb(253,219,199)'],
  //     [1, 'rgb(239,138,98)'],
  //     [2, 'rgb(178,24,43)']
  //   ]
  // }
  // Adjust the heatmap radius by zoom level
  // 'heatmap-radius': {
  //   stops: [
  //     [0, 1],
  //     [5, 50]
  //   ]
  // }
};


const Heatmap = () => {
  const center = [126.07014059, -3.2333765]

  /* eslint-disable-next-line:no-any */
  // const onStyleLoad = (map: any ) => {
  //   const { onStyleLoad } = Props;
  //   return onStyleLoad && onStyleLoad(map);
  // };
  console.log(layerPaint)
    return (
      
      <Map
        center={center}
        zoom={[6]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer type="heatmap" paint={layerPaint}>
          {data.map((el, index) => (
            <Feature key={index} coordinates={el.latlng} properties={el} />
          ))}
        </Layer>
      </Map>
      
    );
  
}

export default Heatmap
import React from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import MapGL  from 'react-map-gl'
var HeatmapOverlay = require('react-map-gl-heatmap-overlay');
var cities = require('example-cities');
// ES5

const Map = ReactMapboxGl({
  accessToken: `pk.eyJ1IjoiYXpoYXJpZSIsImEiOiJjamQ5cjVmYnMyYWs1MzNsYm5nNjY0cGg3In0.dUboQUB7N3Nhk2Ot1zBFMQ`
});

// in render()
const Foobar = () => {
  const viewport =  {
    width: window.innerWidth,
    height: window.innerHeight,
    latitude: 0,
    longitude: 0,
    zoom: 2
  }

  
  return(
    <MapGL {...viewport}>
      <HeatmapOverlay locations={cities} {...viewport} />
    </MapGL>
  )
}

export default Foobar
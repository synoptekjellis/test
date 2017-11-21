import { geoMercator, geoPath } from 'd3-geo';
import _ from 'lodash';
import React, { Component } from 'react';
import { feature } from 'topojson-client';

import cities from '../cities';
import worldJson from './world-110m.json';

class WorldMap extends Component {
  constructor() {
    super();
    this.state = {
      worldData: []
    };
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([800 / 2, 450 / 2]);
  }
  componentDidMount() {
    this.setState({
      worldData: feature(worldJson, worldJson.objects.countries).features
    });
  }

  pointToMarkerHtml = (point, index) => {
    return (
      <circle
        key={`marker-${index}`}
        cx={this.projection()(point.coordinates)[0]}
        cy={this.projection()(point.coordinates)[1]}
        r={3}
        fill="#E91E63"
        className="marker"
        onMouseEnter={event => {
          console.log('hi!');
        }}
      />
    );
  };

  generateMarkers = () => {
    const allMArkers = _.chain(cities)
      .map(this.pointToMarkerHtml)
      .value();

    return allMArkers;
  };

  render() {
    const { width, height } = this.props;

    return (
      <svg
        width={width}
        height={height}
        viewBox={`${0} ${width / 128} ${width / 1.6} ${height / 1.7}`}
        className="map-root"
      >
        <g className="countries">
          {this.state.worldData.map((d, i) => (
            <path
              key={`path-${i}`}
              d={geoPath().projection(this.projection())(d)}
              className="country"
              //control country colors here
              fill={`rgba(38,50,56,${1 / this.state.worldData.length * i})`}
              stroke="#222"
              strokeWidth={0.5}
            />
          ))}
        </g>
        <g className="markers">{this.generateMarkers()}</g>
      </svg>
    );
  }
}

export default WorldMap;
import React from "react";

import { Card, Grow } from "@mui/material";

import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
  GeoJSON,
} from "react-leaflet";

import L from "leaflet";

import * as features from "../../../data/Wards.json";
import * as hospitals from "../../../data/Hospitals.json";
import * as roads from "../../../data/Highways.json";

import pin from "../../../img/icon.png";

import IconButton from "./IconButton.jsx";

var selected = null;

// Can change color with CSS
let iconStyle = L.icon({
  iconSize: [24, 24], // size of the icon
  // iconUrl: pin,
  color: "green",
});

export default class Map extends React.Component {
  defaultStyle = (feature) => {
    return {
      fillColor: "#f1faee",
      weight: 1,
      opacity: 1,
      color: "black",
      fillOpacity: 0.6,
    };
  };
  highlightStyle = () => {
    return {
      fillColor: "#78716e",
      weight: 1,
      opacity: 1,
      color: "black",
      fillOpacity: 0.6,
    };
  };
  roadStyle = () => {
    return {
      weight: 4,
      opacity: 1,
      color: "#bb3e03",
      fillOpacity: 0.6,
    };
  };
  onEachWard = (ward, layer) => {
    let name = ward.properties["WARD_NAME_"];
    let num = ward.properties["WARD_NUM"];
    let area = ward.properties["Shape_Area"];

    let popupContent = `<div class='info leaflet-control'>`;
    popupContent += `<h2><span>Ward: ${name}</span></h2>`;
    popupContent += `<h3><span>Ward Number: ${num}</span></h3>`;
    popupContent += `<h3><span>Land Area (Sq Km): ${area}</span></h3>`;
    popupContent += `</div>`;

    layer.bindTooltip(popupContent).openTooltip();

    layer.on({ click: this.clicked.bind(this) });
  };
  onEachHospital = (hospital, layer) => {
    let name = hospital.properties.NAME;
    let addr = hospital.properties.ADDRESS;

    let popupContent = `<p><b>Hospital: ${name}</b><br />Address: ${addr}<br /></p>`;

    // layer.setIcon(iconStyle);

    layer.bindTooltip(popupContent).openTooltip();
  };
  onEachRoad = (road, layer) => {
    let name = road.properties.L_STNAME_C;
    let roadclass = road.properties.ROADCLASS;
    let pavedstatus = road.properties.PAVSTATUS;
    let shapelength = road.properties.Shape_Length;

    let popupContent = `<p><b>Name: ${name}</b><br />
                            Road Class: ${roadclass}<br />
                            Paved Status: ${pavedstatus}<br />
                            Road Length: ${shapelength}</p>`;

    layer.bindTooltip(popupContent).openTooltip();
  };
  clicked = (ev) => {
    let oldSelected = selected;
    selected = ev.target;

    // If there is no previously selected feature, style the current selection
    if (oldSelected === null) {
      selected.setStyle(this.highlightStyle(selected.feature));
    }
    // Un-highlight the re-selected feature
    else if (
      oldSelected.feature.properties["Census subdivision name"] ===
      selected.feature.properties["Census subdivision name"]
    ) {
      selected.setStyle(this.defaultStyle(selected.feature));
      selected = null;
    }
    // Un-highlight the old selected feature and highlight the new one
    else if (
      oldSelected.feature.properties["Census subdivision name"] !==
      selected.feature.properties["Census subdivision name"]
    ) {
      oldSelected.setStyle(this.defaultStyle(oldSelected.feature));
      selected.setStyle(this.highlightStyle(selected.feature));
    }
  };
  render() {
    return (
      <Grow in={true} timeout={1000}>
        <Card
          elevation={3}
          style={{
            margin: "0px 20px 20px 20px",
          }}
        >
          <MapContainer
            center={[45.279716962875604, -75.78658103340784]}
            zoom={9}
            scrollWheelZoom={true}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              <LayersControl.Overlay checked name="Hospitals">
                <GeoJSON data={hospitals} onEachFeature={this.onEachHospital} />
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Wards">
                <GeoJSON
                  data={features}
                  style={this.defaultStyle}
                  onEachFeature={this.onEachWard}
                />
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Roads">
                <GeoJSON
                  data={roads}
                  style={this.roadStyle}
                  onEachFeature={this.onEachRoad}
                />
              </LayersControl.Overlay>
            </LayersControl>
            <ScaleControl position="bottomleft" />
            <IconButton
              title={"Change Icon Style"}
              center={[45.279716962875604, -75.78658103340784]}
              zoom={15}
            />
          </MapContainer>
        </Card>
      </Grow>
    );
  }
}
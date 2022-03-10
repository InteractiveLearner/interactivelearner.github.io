import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  ScaleControl,
} from "react-leaflet";
import ScaleButton from "./ScaleButton.jsx";
import { Card, Grow } from "@mui/material";

export default class Map extends React.Component {
  render() {
    return (
      <Grow in={true} timeout={1000}>
        <Card
          elevation={3}
          style={{
            // padding: "0px 16px 16px 16px",
            margin: "0px 20px 20px 20px",
          }}
        >
          <MapContainer
            center={[48.42829687325907, -123.3656709938676]}
            zoom={12}
            scrollWheelZoom={true}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="OpenStreetMap">
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <ScaleControl position="bottomleft" />
            <ScaleButton
              title={"Small Scale"}
              center={[48.42829687325907, -123.3656709938676]}
              zoom={12}
            />
            <ScaleButton
              title={"Large Scale"}
              center={[48.42829687325907, -123.3656709938676]}
              zoom={15}
            />
          </MapContainer>
        </Card>
      </Grow>
    );
  }
}
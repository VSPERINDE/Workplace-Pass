import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/locations/location.context";
import { WorkplaceContext } from "../../../services/workplaces/workplaces.context";
import { Search } from "../components/search.component";
import { MapCallout } from "../components/map-callout.component";

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { workplace = [] } = useContext(WorkplaceContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    console.log(workplace),
    (
      <>
        <Search />
        <Map
          region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
          }}
        >
          {workplace.map((workplaces) => {
            return (
              <Marker
                key={workplaces.name}
                title={workplaces.name}
                coordinate={{
                  latitude: workplaces.geometry.location.lat,
                  longitude: workplaces.geometry.location.lng,
                }}
              >
                <MapView.Callout
                  onPress={() =>
                    navigation.navigate("WorkplaceDetail", {
                      workplace,
                    })
                  }
                >
                  <MapCallout workplace={workplace} />
                </MapView.Callout>
              </Marker>
            );
          })}
        </Map>
      </>
    )
  );
};

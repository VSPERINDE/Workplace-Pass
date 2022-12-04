import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../locations/location.context";

import { workplaceRequest, workplaceTransform } from "./workplaces.service";

export const WorkplaceContext = createContext();

export const WorkplaceContextProvider = ({ children }) => {
  const [workplace, setWorkplace] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveWorkplace = (loc) => {
    setLoading(true);
    setWorkplace([]);
    setTimeout(() => {
      workplaceRequest(loc)
        .then(workplaceTransform)
        .then((results) => {
          setLoading(false);
          setWorkplace(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveWorkplace(locationString);
    }
  }, [location]);

  return (
    <WorkplaceContext.Provider
      value={{
        workplace,
        isLoading,
        error,
      }}
    >
      {children}
    </WorkplaceContext.Provider>
  );
};

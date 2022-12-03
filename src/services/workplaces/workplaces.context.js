import React, { useState, createContext, useEffect, useMemo } from "react";

import { workplaceRequest, workplaceTransform } from "./workplaces.service";

export const WorkplaceContext = createContext();

export const WorkplaceContextProvider = ({ children }) => {
  const [workplace, setWorkplace] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveWorkplace = () => {
    setLoading(true);
    setTimeout(() => {
      workplaceRequest()
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
    retrieveWorkplace();
  }, []);

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

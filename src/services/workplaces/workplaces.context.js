import React, { useState, createContext, useEffect, useMemo } from "react";

import { workplaceRequest, workplaceTransform } from "./workplaces.service";

export const WorkplaceContext = createContext();

export const WorkplaceContextProvider = ({ children }) => {
  return (
    <WorkplaceContext.Provider
      value={{
        workplace: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </WorkplaceContext.Provider>
  );
};

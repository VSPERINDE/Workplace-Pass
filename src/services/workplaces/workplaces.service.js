import { mocks } from "./mock";
import camelize from "camelize";

export const workplaceRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("404 - Not found");
    }
    resolve(mock);
  });
};

export const workplaceTransform = ({ results = [] }) => {
  const mappedResults = results.map((workplace) => {
    return {
      ...workplace,
      isOpenNow: workplace.opening_hours && workplace.opening_hours.open_now,
      isClosedTemporarily: workplace.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

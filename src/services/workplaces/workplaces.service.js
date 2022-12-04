import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const workplaceRequest = (location) => {
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
    workplace.photos = workplace.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...workplace,
      address: workplace.vicinity,
      isOpenNow: workplace.opening_hours && workplace.opening_hours.open_now,
      isClosedTemporarily: workplace.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

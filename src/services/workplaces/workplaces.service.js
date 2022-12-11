import camelize from "camelize";

export const workplaceRequest = (location) => {
  return fetch(
    `http://127.0.0.1:5001/office-pass-fd687/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const workplaceTransform = ({ results = [] }) => {
  const mappedResults = results.map((workplace) => {
    return {
      ...workplace,
      address: workplace.vicinity,
      isOpenNow: workplace.opening_hours && workplace.opening_hours.open_now,
      isClosedTemporarily: workplace.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

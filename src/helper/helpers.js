export const checkExpirationTime = (currentTime, apiCallData) => {

  let newArray = apiCallData.filter(
    (item) => item.expirationTime >= currentTime
  );

  return [newArray, newArray.length];
};

export const addToLocalStorageApiCallData = (
  dataName,
  callTime,
  expirationTime
) => {
  let existing = localStorage.getItem(dataName);
  existing = existing ? JSON.parse(existing) : [];

  existing[existing.length] = {
    callTime: callTime,
    expirationTime: expirationTime,
  };

  localStorage.setItem(dataName, JSON.stringify(existing));
};

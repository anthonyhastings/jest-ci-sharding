const waitFor = (timeInMs) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMs);
  });
};

export { waitFor };

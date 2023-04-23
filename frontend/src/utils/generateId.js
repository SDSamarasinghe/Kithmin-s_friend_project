function generateId() {
  const prefix = "BVEMP";
  const length = 9;
  const characters = "01234567889";

  let result = prefix;
  for (let i = 0; i < length - prefix.length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
  //   return "DRV1A9B8";
}

export { generateId };

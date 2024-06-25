function countChars(string, char) {
  let amountOfChars = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      amountOfChars++;
    }
  }
  return amountOfChars;
}

function countBs(string) {
  return countChars(string, "B");
}

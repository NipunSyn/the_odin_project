function analyze(array) {
  if (array.every((e) => typeof e === "number")) {
    const minimum = array.reduce((prev, curr) => (curr < prev) ? curr : prev)
    const maximum = array.reduce((prev, curr) => (curr > prev) ? curr : prev);
    const length = array.length;
    const average = array.reduce((acc, cv) => acc + cv) / array.length;
    return {
      average: average,
      min: minimum,
      max: maximum,
      length: length,
    };
  } else {
    throw new Error("All elements must be numeric");
  }
}

module.exports = analyze;

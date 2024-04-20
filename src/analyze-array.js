export default function analyzeArray(arr) {
  const { length } = arr;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let average = arr.reduce((prev, cur) => prev + cur, 0) / length;
  if (!Number.isInteger(average)) {
    average = parseFloat(average.toFixed(2));
  }
  return { length, min, max, average };
}

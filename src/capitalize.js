export default function capitalize(str) {
  const firstChar = str.slice(0, 1);
  firstChar.toUpperCase();
  return firstChar.concat(str);
}

export default function reverseString(str) {
  const arr = str.split("");
  arr.reverse();
  const res = arr.join("");
  return res;
}

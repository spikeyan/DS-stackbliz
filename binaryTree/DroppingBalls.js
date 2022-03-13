// UVa 679
import { test } from '../test';

let inputs = [
  [4, 2],
  [3, 4],
  [10, 1],
  [2, 2],
  [8, 128],
  [16, 12345],
];
let expect = [12, 7, 512, 3, 255, 36358];

function totalCounts(depth) {
  let sum = 0;
  for (let i = 0; i < depth - 1; i++) {
    sum += Math.pow(w, i);
  }
  return sum;
}

function DroppingBalls() {
  console.log(12345);
}

console.log(test(DroppingBalls, inputs, expect));

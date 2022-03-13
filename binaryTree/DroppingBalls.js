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

class Node {
  id = '';
  left = null;
  right = null;
  constructor(id) {
    this.id = id;
  }
}

function totalCounts(depth) {
  let sum = 0;
  for (let i = 0; i < depth; i++) {
    sum += Math.pow(2, i);
  }
  return sum;
}

function createBinaryTree(total) {
  let root = new Node(1);
  let nodes = [root];
  let i = 2;
  for (let item of nodes) {
    nodes.push((item.left = new Node(i)));
    i++;
    if (i == total) return root;
    nodes.push((item.right = new Node(i)));
    i++;
    if (i == total) return root;
  }
}

function DroppingBalls(arr) {
  let [depth, balls] = arr;
  depth = 3;
  balls = 2;
  let total = totalCounts(depth);
  console.log(createBinaryTree(total));
}

console.log(test(DroppingBalls, inputs, expect));

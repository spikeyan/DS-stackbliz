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
  open = true;
  hasBall = false;
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
    if (i > total) return root;
    nodes.push((item.right = new Node(i)));
    i++;
    if (i > total) return root;
  }
}

//模拟小球下落
function DroppingBalls(arr) {
  let [depth, balls] = arr;
  let total = totalCounts(depth);
  let tree = createBinaryTree(total);
  let res = 0;
  for (let i = 0; i < balls; i++) {
    res = drop(tree);
  }
  return res;
}

//另一种解法，小球下落存在数学规律,直接模拟最后一球的路径
function DroppingBalls1(arr){
  let [depth, balls] = arr;
  let k = 1
  for(let i = 0 ;i<depth-1;i++){
    if(balls%2){
      k = k*2
      balls = (balls+1)/2
    }else{
      k = k*2+1
      balls = balls/2
    }
  }
  return k
}

function drop(node) {
  //node.open must be open at this situation
  let left = node.left && !node.left.hasBall && node.left.open;
  let right = node.right && !node.right.hasBall && node.right.open;

  //if both not open
  if (node.left?.open == false && node.right?.open == false) {
    node.right.open = true;
    left = true;
  }
  if (node.id != 1) {
    node.open = false;
  }
  if (!left && !right) {
    //land
    node.hasBall = true;
    return node.id;
  } else if (left) {
    //go left
    return drop(node.left);
  } else if (!left && right) {
    // go right
    return drop(node.right);
  }
}

console.log(test(DroppingBalls1, inputs, expect));

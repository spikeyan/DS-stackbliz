import { test } from './test';

let inputs = [
  'This_is_a_[Beiju]_text',
  '[][][]Happy_Birthday_to_Tsinghua_University',
  'jasdf[klajfklj[askflea[ldfkjsdlf]jlasd[fec',
];

let expect = [
  'BeijuThis_is_a__text',
  'Happy_Birthday_to_Tsinghua_University',
  'fecldfkjsdlfaskfleaklajfkljjasdfjlasd',
];

class Node {
  content = '';
  next = null;
  constructor(c) {
    this.content = c;
  }
}

class LinkedList {
  root = {
    type: 'root',
    next: null,
  };
  constructor(node) {
    if (node instanceof Node) {
      this.root.next = node;
    }
  }
  getLast(obj = this.root, list) {
    if (list) {
      list.push(obj.content);
    }
    return obj.next ? this.getLast(obj.next, list) : obj;
  }
  append(node) {
    this.getLast().next = node;
  }
  getList() {
    let arr = [];
    this.getLast(this.root, arr);
    return arr.slice(1);
  }
  insert(node) {
    this.insertAfter(this.root, node);
  }
  insertAfter(existNode, node) {
    node.next = existNode.next;
    existNode.next = node;
  }
}

function brokenKeyBoard(input) {
  let ll = new LinkedList();
  let where = null;
  input.split('').forEach((e, i) => {
    if (e == '[') {
      where = ll.root;
    } else if (e == ']') {
      where = null;
    } else {
      if (where) {
        let node = new Node(e);
        ll.insertAfter(where, node);
        where = node;
      } else {
        ll.append(new Node(e));
      }
    }
  });

  return ll.getList().join('');
}
console.log(test(brokenKeyBoard, inputs, expect));

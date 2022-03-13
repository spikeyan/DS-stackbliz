export class Node {
  content = '';
  next = null;
  constructor(c) {
    this.content = c;
  }
}

export class LinkedList {
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

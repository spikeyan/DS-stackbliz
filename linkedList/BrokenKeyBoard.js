// UVa 11988
import { test } from '../test';
import { Node, LinkedList } from './classLinkedList';

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

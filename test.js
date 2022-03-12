export function test(fn,inputs,expect) {
  for (let i in inputs) {
    let temp = fn(inputs[i]);
    if (temp !== expect[i]) {
      return 'WRONG! EXPECT ' + expect[i] + ' GET ' + temp;
    }
  }
  return 'CORRECT!';
}

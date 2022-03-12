export function test(fn, inputs, expect) {
  for (let i in inputs) {
    let temp = fn(inputs[i]);
    if (temp !== expect[i]) {
      return 'WRONG! EXPECT ' + expect[i] + ' GET ' + temp;
    }
  }
  document.getElementById(
    'app'
  ).innerHTML = `<h2>function <i style="color:blue">${fn.name}</i> 's test has passed</h2>`;
  return 'CORRECT!';
}

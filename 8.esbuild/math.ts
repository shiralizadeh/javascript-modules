// These are considered side-effect free
window.a = 12.34;
let b = "abcd";
let c = { a: a };

// These are not considered side-effect free
// since they could cause some code to run
let x1 = "ab" + cd;
let y = foo.bar;
let z = { [x]: x };

export function sub(a, b) {
  return a + b;
}

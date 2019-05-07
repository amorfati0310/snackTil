const reduce = (reducer, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const val of iter) {
    acc = reducer(acc, val);
  }
  return acc;
};
const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const go = (...args) => reduce((a1, f) => f(a1), args);
const pipe = (f1, ...fs) => (...as) => go(f1(...as), ...fs);

const add = (a, b) => a + b;

const log = console.log;
const range = l => {
  let i = -1;
  let res = [];
  while (++i < l) {
    // log(i, "range");
    res.push(i);
  }
  return res;
};

log(range(5));

log(range(2));

var list = range(4);
log(list);
// log(reduce(add, list));

const L = {};
L.range = function*(l) {
  let i = -1;
  while (++i < l) {
    // log(i, "L.range");
    yield i;
  }
};
var list = L.range(4);
log(list);
// L.range {suspend} __proto: Generator
// iterable을 가지고 있는 것과 지연성 없이 generator가 아닌
// 그냥 range는 이미 순차적으로 실행한 리스트를 가직 있다

// log(reduce(add, list));

// L과 차이

// test

// function test(name, time, f) {
//   console.time(name);
//   while (time--) f();
//   console.timeEnd(name);
// }

// test("range", 10, () => reduce(add, range(1000000)));
// test("L.range", 10, () => reduce(add, L.range(1000000)));

// take

// const take = (l, iter) => {
//   let res = [];
//   for (const a of iter) {
//     res.push(a);
//     if (res.length === l) return res;
//   }
//   return res;
// };
const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

log(take(10, range(100)));

// 7.4 지연평가

// iterable 중심 프로그래밍

// L.map
L.map = function*(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
};
var it = L.map(a => a + 10, [2, 4, 6]);
log(it.next());
log(it.next());
log(it.next());

// L.filter

L.filter = function*(f, iter) {
  for (const val of iter) if (f(val)) yield val;
};

var it = L.filter(a => a % 2, [2, 3, 5, 6]);
log(it.next());
log(it.next());
log(it.next());

// log(range(10));
// take(2), log
go(range(10), map(n => n + 10), filter(n => n % 2), take(2), log);

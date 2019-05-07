function solution(arrangement) {
  const stack = [];
  console.log("arrangement");
  let slice = 0;
  for (const val of arrangement) {
    if (val === "(") {
      stack.push(val);
    } else {
      stack.pop();
      console.log("stack", stack.length);
      console.log("slice", slice);
      slice = slice + stack.legnth;
      console.log("slice", slice);
    }
  }
  return slice;
}
console.log(solution("()(((()())(())()))(())"));

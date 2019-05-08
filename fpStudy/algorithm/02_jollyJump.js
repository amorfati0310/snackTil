function solution(list) {
  let diff;
  for (let i = 0; i < list.length - 1; i++) {
    diff = Math.abs(list[i] - list[i + 1]);
    if (diff >= list.length) return "Not jolly";
  }
  return "jolly";
}
console.log(solution([4, 1, 4, 2, 3]));
console.log(solution([5, 1, 4, 2, -1, 6]));

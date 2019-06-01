const countingSort = (array, k) => {
 // k 정렬할 수 중 가장 큰 값을 의미
 let count = new Array(k + 1).fill(0);

 for (item of array) {
  count[item] += 1;
 }

 for (let i = 0; i < k; i++) {
  count[i + 1] += count[i];
 }
 console.log(count);
 const sorted = [];
 for (number of array) {
  console.log("number", number, "count", count[number]);
  sorted[count[number] - 1] = number;

  count[number] -= 1;
  console.log(sorted, count);
 }
 // 누적합을 통해서 결국 겹치는 부분에 시작 Idx들을 count가 가르키면서 최종 정렬이 되는 구조
 console.log(sorted);
 return sorted;
};

countingSort([3, 4, 0, 1, 2, 4, 2, 4], 4);
countingSort([3, 4, 1, 1, 2, 4, 20, 10], 20);

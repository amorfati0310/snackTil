// 이제 이해함 맨 앞에 숫자가 갯수였다 !!!
// - 불필요한 변수는 다른 이름(_ 등)을 쓰시는 게 좋습니다.
// - diff는 밖에 let으로 두는 것보다는 scope을 제한해서 const로 쓰시는 게 좋습니다.
// - diffFactors의 크기를 비교하는 건 좀더 빨라도 됩니다.
// - Jolly, Not Jolly란 문자열 대신 true, false를 주시고 나중에 문자열로 바꾸는 게 유연합니다.
// - 바로 위의 수형님 코드를 보시면 for를 쓰는 부분을 더 간단하게 바꿔볼 힌트가 숨어있습니다.

// 피드 반영해서 수정 고우

// 1. -> true false 판별하는 함수로 수정
function solution(list) {
  const [size, ...diffFactors] = list;
  const checkSequenceNumberList = (n, numberList) => {
    const gapKeys = [...new Array(n - 1).keys()];
    const diffSet = new Set(gapKeys.map(v => v + 1));
    // diff gap list를 for쓰지 않고 만들어보자
    for (const gap of gapKeys.map((_, i) => Math.abs(numberList[i] - numberList[i + 1]))) {
      if (diffSet.has(gap)) {
        diffSet.delete(gap);
      } else {
        return false;
      }
    }
    return diffSet.size === 0;
  };
  const isJollyJumber = (n, diffList) => {
    if (!diffList.length) {
      return true;
    }
    return checkSequenceNumberList(n, diffList);
  };
  return isJollyJumber(size, diffFactors) ? "Jolly" : "Not Jolly";
}
console.log(solution([4, 1, 4, 2, 3]));
console.log(solution([5, 1, 4, 2, -1, 6]));
console.log(solution([3, -6, -5, -7]));
console.log(solution([4, 1, 4, 2, 3]));
console.log(solution([5, 1, 4, 2, -1, 6]));
console.log(solution([3, -6, -5, -7]));
console.log(solution([1, 1]));
console.log(solution([1]));

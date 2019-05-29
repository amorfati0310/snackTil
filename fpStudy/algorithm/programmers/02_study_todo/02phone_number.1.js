const solution = (phonebook)=>{
  const sortedPhonebook = [...phonebook].sort((a,b)=> a.length - b.length)
  const groupbyFirstNumber = sortedPhonebook.reduce((acc,cur)=>{
    if(!acc[Number(cur[0])]){
      acc[Number(cur[0])] = [];
    }
    acc[Number(cur[0])].push(cur)
    return acc;
  },{})
  // 
  const filteredNumber = Object.values(groupbyFirstNumber).filter(numbers=>numbers.length>1)
  for(const numbers of filteredNumber){
    numbers
  }
  return filteredNumber
}


// 119가 포함되는지 확인하고 
// 그 다음 97774223 
// 

// js로 flow만 짜고 -> python으로 옮기는 작업 하기 

// 1. sort -> length에 따라서 sort한다.
// 2. -> 앞자리가 맞는 애들끼리 분류한다. 
// 3 -> Object.keys() -> 길이가 1 이상인 애들만 뽑는다. 

console.log(solution(["119", "97674223", "1195524421"]));

const solution = (phonebook)=>{
  const sortedPhoneBook = [...phonebook].sort((a,b)=>a.length-b.length)
  console.log(sortedPhoneBook);
  let idx = 0;
  const longest = sortedPhoneBook[sortedPhoneBook.length-1].length
  for(let i=0; i<longest; i++){
    const set = new Set(...sortedPhoneBook.map(v=>v[i]))
    console.log('set', set);
    
  }
}

// 0. 우선 자릿수가 작은 애들로 정렬한다. 
// 1. 첫째자리 같은애를 뽑는다.


console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123",'456',"789"]));
console.log(solution(['12','123','1235','567','88']));

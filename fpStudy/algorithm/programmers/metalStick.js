function solution(arrangement) {
  let depth = 0;
  const stack = []
  let stackPoint = null;
  for(const val of arrangement){
    if(val==='('){
        depth +=1;
    }
    else{
      depth -= 1;
      depth && stack.push(depth)
    }
  }
  console.log('stack', stack)
}

console.log(solution("()"))
console.log(solution("(())"))
console.log(solution("((()))"))

// console.log(solution("()(((()())(())()))(())"))	

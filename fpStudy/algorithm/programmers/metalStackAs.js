function solution(arrangement) {
    let result = 0;
    let st = [];
 
    for (let i=0; i < arrangement.length; i++) {
        if (arrangement[i] === '('){
            st.push(arrangement[i]);
        } else {
            st.pop();
            if (arrangement[i-1] === '(') {
                result += st.length;
            } else result +=1;
        }
    }
    return result ;
}

console.log(solution("()"))
console.log(solution("(())"))
console.log(solution("((()))"))

// console.log(solution("()(((()())(())()))(())"))	
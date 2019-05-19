function solution(s){
    const stack = []
    for(const char of s){
        if(char==='('){
            stack.push('(')
        }
        else {
            if(stack.length>0){
                stack.pop()
            }
            else return false;
        }
    }
    return stack.length===0
}

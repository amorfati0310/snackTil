function solution(s) {
    let min;
    let max;
    for(let val of new Set(s.split(' '))){
        val = Number(val)
        if(min === undefined) min = val;
        else {
            
           if(min> val) min = val; 
        }
         if(max === undefined) max = val;
        else {
           if(val > max) max = val;
        }
    } 
    return `${min} ${max}`
}
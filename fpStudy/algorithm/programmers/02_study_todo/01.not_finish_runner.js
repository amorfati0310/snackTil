function solution(participant, completion) {
    const participantsObj = participant.reduce((acc,crr)=>{
        acc[crr] ? acc[crr]+=1 : acc[crr]=1;
       return acc 
    },{})
    const result = completion.reduce((acc, crr)=>{
        acc[crr]-=1;
        if(acc[crr]===0) delete acc[crr];
        return acc;
    },participantsObj)
    return Object.keys(result)[0];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']))

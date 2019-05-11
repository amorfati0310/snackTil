function solution(numbers) {
    // 1 첫번째 자리수를 구한다 
    const getFirstDigit = num => {
          while(parseInt(num/10)){
            num = parseInt(num/10)
        }
       return num%10
    }
    const digitCount = n => {
        let count = 0;
        if (n >= 1) count+=1;
        while (n / 10 >= 1) {
            n /= 10;
            count+=1;
        }
        return count;
    }
    const compareDigits = (a,b)=> {
       let aDigit = getFirstDigit(a)
       let bDigit = getFirstDigit(b)
        if(aDigit === bDigit){
            // 자릿수가 같으면 크기 비교를 
            if(digitCount(a)===digitCount(b)) return b-a;
            else {
               // 572 52 5
              return getFirstDigit(b-10**digitCount(b)) - getFirstDigit(a-10**digitCount(a)) 
            }    
        }else {
            return bDigit- aDigit
        }
    }
    numbers.sort((a,b)=>compareDigits(a,b))

}
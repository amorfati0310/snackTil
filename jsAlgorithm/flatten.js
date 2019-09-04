const flatten = (arr) => {
  
  const stackArrayValue = (arr, prev = []) => {

    if(!Array.isArray(arr)){
      prev.push(arr);
      return prev;
    }
    else {
      for(const val of arr){
        prev = stackArrayValue(val, prev)
      }
      return prev;
    }
  }
  const result = arr.reduce((acc, crr) => {
    return stackArrayValue(crr,acc);
  }, [])
  return result;
}

console.log(flatten([1,2,[3,4],[5,[6]]]));
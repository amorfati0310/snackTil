function solution(n) {
    const subak = "수박"
    return n%2 ? subak.repeat(n/2)+"수": subak.repeat(n/2) 
}
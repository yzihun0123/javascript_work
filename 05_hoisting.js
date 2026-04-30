// var 타입을 왜 사용을 자제해야 하는지?
// 변수 호이스팅이 생겨서 나중에 선언해도 오류 X
console.log(name)  // undefined 출력 -> 오류 X
var name = '김형민'

// let과 const는 사용 전에 먼저 선언되고 초기화 되어야 함.
let hong = '홍길동'
console.log(hong)

let temp = '김형민'
// NaN : Not a Number
console.log(+temp)
// 1. 조건문
let number = 4;
// number가 짝수이면 짝수 출력, 홀수이면 홀수 출력
if (number % 2 == 0) {
  console.log('짝수')
} else {
  console.log('홀수')
}

// 2. 중복 if
// number가 2, 3, 4, 5의 배수인지?
// 모두 아니면 : 2, 3, 4, 5 배수가 아닙니다. 출력
console.log('--------------')
if ((number % 2) === 0) {
  console.log('2의 배수')
} else if ((number % 3) === 0) {
  console.log('3의 배수')
} else if ((number % 4) === 0) {
  console.log('4의 배수')
} else if ((number % 5) === 0) {
  console.log('5의 배수')
} else {
  console.log('2, 3, 4, 5의 배수가 아닙니다.')
}

console.log('--------------')
const fruits = 'Apple'
switch (fruits) {
  case 'Apple':
    console.log("사과")
    break;
  case 'Mango':
    console.log("망고")
    break;
  default:
    console.log("과일")
    break;
}

// 일반적인 for 루프
console.log('--------------')
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + 1;
} console.log(sum)

// for - in : 객체의 키로 순회
const 안유진 = {
  name : 'Ahn YuJin',
  year : 2003,
  group : 'ive'
};

console.log('--------------')
for (let key in 안유진) {
  console.log(key)
  console.log(안유진[key])
}

console.log('--------------')
for (let[key, value] of Object.entries(안유진)){
  console.log(key)
  console.log(value)
}

console.log('--------------')
// for - of : 값으로 순회(배열)
const colors = ["빨강", "검정", "노랑"]
for(let color of colors) {
  console.log(color)
}

// while
console.log('--------------')
let s = 0;
let i = 1;
while(i <= 10) {
  s = s + i;
  i = i + 1;
}
console.log(s)
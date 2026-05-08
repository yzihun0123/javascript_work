// 콜백(Callback) 함수 : 나중에 필요할 때 실행될 함수
// 특정 조건이 만족 된 후 실행되는 함수

function greet(name, callback) {
  console.log('안녕하세요 ' + name + '님');
  callback();
}

function afterGreeting(){
  console.log('오늘도 맛점 하세요.');
}

function beforeGreeting(){
  console.log('오늘도 아침 맛있게 드세요.');
}
greet('홍길동', beforeGreeting);

console.log('--------------------')
// setTimeout 함수는 특정 시간 이후에 실행할 함수를 정의
let t_1 = setTimeout(function(){
  console.log('3초가 지났습니다.')
}, 3000);
console.log('--------------------')
// 함수의 참조를 전달
function sayHello(){
  console.log('안녕하세요!')
}
let t_2 = setTimeout(sayHello, 2000);

// 타이머를 취소하기
clearTimeout(t_1) 
let ive = {
  name : '장원영',
  group : 'IVE',
  dance : function() {
    return '장원영이 춤을 춥니다.'
  }
}
// 값으로 접근
console.log(ive.name); // . (클래스 구분자)
console.log(ive['group']) // 대괄호 표기법

// 변수로 키 접근이 가능
const key = 'name';
console.log('--------------------')
console.log(ive[key]);

// 메서드 호출
console.log(ive.dance())

// 추가 / 수정 / 삭제
// 1. 수정
console.log('--------------------')
ive.name = '안유진';

console.log(ive)
// 2. 추가, Object에 프로퍼티 추가
ive.position = '센터';
console.log('--------------------')
console.log(ive)

console.log('--------------------')
// 3. 삭제
delete ive.position
console.log(ive)

// 단축 프로퍼티
const name = '민지';
// 오브젝트 만들기
// 키와 변수의 값이 같으면 단축이 가능하다.
const minji = {
  name : name,
  // name, -> 단축표현
}
console.log(minji);

// 복사는 무조건 ... 쓴다.
const ive2 = {...ive}; // 깊은 복사
console.log('--------------------')
ive2.name = '이서';
console.log(`ive : ${Object.values(ive)}`)
console.log(`ive : ${Object.values(ive2)}`)
console.log('--------------------')
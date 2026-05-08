const k_group = [
  {
    group : 'ive',
    name : ['장원영','안유진', '이서'],
    count : 3
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅','마시로'],
    count : 3
  },
]

// 0) 깊은 복사
console.log('0) 깊은 복사')
const group_copy = [...k_group]
console.log(group_copy);

/* 1-1) 데이터 추가: 브레이브걸스 */
console.log('1-1) 데이터 추가: 브레이브걸스')
group_copy.push = ({
  group : '브레이브걸스',
  name : ['유나', '유정', '민영'],
  count : 3,
});
console.log(group_copy)


/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
console.log('1-2) 데이터 맨 앞 추가: 블랙핑크')
group_copy.unshift = ({
  group : '블랙핑크',
  name : ['제니', '리사', '로제', '지수'],
  count : 4
});
console.log(group_copy)

/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
console.log('2-1) 데이터 삭제: 블랙핑크 삭제')
delete group_copy.unshift
console.log(group_copy)


/* 2-2) 데이터 삭제: 케플러 삭제 */
console.log('2) 데이터 삭제: 케플러 삭제')
delete group_copy.find(group => group == '케플러')
console.log(group_copy)


/* 3) 데이터 수정: ive의 "이서" -> "가을" */
console.log('3) 데이터 수정: ive의 "이서" -> "가을"')
k_group[0].name

/* 4) group 오름차순 정렬 (단순 문자 비교) */
console.log('4) group 오름차순');

/* 5) group 내림차순 정렬 (단순 문자 비교) */
console.log('5) group 내림차순');


/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
console.log('6) 각 group name 오름차순 정렬 반영된 group_copy');


/* 7) name으로 검색: "카리나" */
console.log('7) name으로 검색')


/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');
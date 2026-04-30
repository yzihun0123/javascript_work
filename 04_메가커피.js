const megaCoffee = {
  name : '메가커피',
  menus : [
    {name : '아메리카노', price : 2000, category : '커피', options : ["HOT", "ICE"]},
    {name : '카페라떼', price : 3000, category : '커피', options : ["HOT", "ICE"]},
    {name : '딸기스무디', price : 4500, category : '음료', options : ["ICE"]},
    {name : '망고주스', price : 4000, category : '음료', options : ["ICE"]}
  ],
   order : [
    {menuName : '아메리카노', option : "ICE", quantity : '2'},
    {menuName : '딸기스무디', option : "ICE", quantity : '1'},
    {menuName : '카페라떼', option : "HOT", quantity : '3'},
  ]
}


// 🧩 문제
// ✅ 1. 기본 접근
// 매장 이름을 출력하시오.
console.log("매장 이름 : " + megaCoffee.name)

// 첫 번째 메뉴 이름을 출력하시오.
const menus = megaCoffee.menus;
console.log(`첫 번째 메뉴 이름 : ${menus[0].name}`)

// 두 번째 메뉴 가격을 출력하시오.
console.log(`첫 번째 메뉴 이름 : ${menus[1].price}`)

// 세 번째 메뉴의 옵션을 출력하시오.
console.log(`첫 번째 메뉴 이름 : ${menus[2].options}`)

// ✅ 2. 주문 데이터 접근
const order = megaCoffee.order;
// 첫 번째 주문의 수량을 출력하시오.
console.log(`첫 번째 주문의 수량 : ${order[0].quantity}`)

// 두 번째 주문의 메뉴 이름을 출력하시오.
console.log(`두 번째 주문의 메뉴 이름 : ${order[1].menuName}`)

// 세 번째 주문의 옵션을 출력하시오.
console.log(`세 번째 주문의 옵션: ${order[2].option}`)

// const pet = {
//   name : '우리집',
//   dog : [
//     {name : '멍뭉이', age : 3,},
//     {name : '댕댕이', age : 5,}
//   ]
// }
// console.log(pet.name)
// console.log(pet.dog[1].name)
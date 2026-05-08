// 외부 API를 호출하는 자바스크립트 기본 함수
// 1. fetch : Promise

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then((response) => {
    // 전달받은 결과를 Text로 변환 -> Promise
    // return response.text();
    // JSON 타입으로 받은 데이터를 자바스크립트의 object 로 변환
    return response.json();
    // json()
    // return response.json();
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('Error!!')
  })
  .finally(()=>{
    console.log("데이터를 다 가져왔어요...")
  })

console.log('데이터를 다 받고 실행하고 싶습니다.')
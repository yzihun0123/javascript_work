// Promise : 이 작업이 마무리 되면 결과를 꼭 돌려줄께!
// resolve : 함수.. 성공하면 then으로 결과를 넘김
// reject : 함수.. 실패하면 catch로 결과를 넘김
const myPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    const text = prompt('따봉을 입력해줘!! 선물줄께!')
    if(text === '따봉'){
      // resolve()를 호출해서 then()으로 결과 보냄
      resolve('👍')
    } else {
      // reject()를 호출해서 catch()으로 결과 보냄
      reject('👎')
    }
  }, 2000);
})

myPromise
  .then((result) => {
    console.log(`Promise 결과 : ${result}`)
  })
  .catch((error)=>{
    console.log(`Promise 결과 : ${error}`)
  })
  .finally(()=>{
    console.log("끝")
  })
// 1. 값이 없거나 0, -0, null, false, NaN, undefined, 빈 문자열 ("")이라면 객체의 초기값은 false가 됩니다.

// 2. console.log(/welcome.blind/ .test('welcome blind'))

// 3. 1 2 4 

// 4. 
// 자바스크립트는 보통 싱글 쓰레드라고 불리는데, 바로 메인 쓰레드인 이벤트 루프가 싱글 쓰레드이기 때문입니다.
// 일단 setTimeout을 하는 순간 백그라운드를 거쳐 태스크 큐로 함수가 이동하기 때문에 console.log(2) 이 먼저 콘솔에 찍히고 동작이 찍힙니다

// 5.
// const Obj1 = { name: 'woojobs' }
// const Ojb2 = { job: 'dev' } 
// var record = Object.assign({}, Obj1, Ojb2);
// console.log(record)

//6. 
// const obj = [
//     { name: 'A', price: 10000 },
//     { name: 'B', price: 20000 },
//     { name: 'C', price: 1000},
//     { name: 'D', price: 15000 },
//     { name: 'E', price: 3000}
// ]

// result = obj.sort(function (a, b) {
//     return b.price - a.price;
// });

// console.log(result)

//7.
// const price = 200000;
// var coupons = [
//     {type: 'rate', value: 7},
//     {type: 'rate', value: 3},
//     {type: 'rate', value: 5},
//     {type: 'rate', value: 10},
//     {type: 'rate', value: 2},
//     {type: 'amount', value: 3000},
//     {type: 'amount', value: 1000},
//     {type: 'amount', value: 7000},
//     {type: 'amount', value: 5000}
// ];

// function solution(price){
//     let tempResult = [];
//     for (let i =0; i < coupons.length; i++){
//         if (coupons[i].type == 'rate'){
//             let discoutnedPrice =  price * 0.01 * (100 - coupons[i].value)
//             tempResult.push(discoutnedPrice);
//         }else{
//             let discoutnedPrice = price - coupons[i].value
//             tempResult.push(discoutnedPrice);
//         }
//     }
//     let result = (Math.min.apply(null, tempResult))
//     return result
// }

// console.log(solution(200000));

// 8.
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const except = ['c', 'e'];

// for(var t =0 ; t<except.length ;t++){
//     var boolean =false;
//      for(var i =0 ; i<arr.length;i++){
//          if(except[t]===arr[i]){
//              boolean =true;
//              arr.splice(i,1)
//              i--;
//          }
//      }
//      if(boolean){
//         except.splice(t,1);
//          t--;
//      } 
//  }

// console.log(arr)

// 9. 

// function solution(data){
//     let result = [];
//     for (let i = 0; i < data.length; i++){
//         if(typeof(data[i]) == 'number'){
//             result.push(data[i]);
//         }else{
//             if (isNaN(Number(data[i])) == false){
//                 result.push(Number(data[i]))
//             }
//         }
//     }
//     return result;
// }

// let arr = [1,2,3,4, '5',6,'test',10];
// console.log(solution(arr))


// 10.
// const aVersion = '2.5.11';
// const bVersion = '2.5.9';

// function solution(a,b){
//     let newA = Number(aVersion.replace(/\./g,''));
//     let newB = Number(bVersion.replace(/\./g,''));
    
//     if(newA < newB){
//         return false;
//     }else{
//         return true;
//     }
// }

// console.log(solution(aVersion, bVersion))

// 11.
// console.log(ret1);
// var ret1 = "Hello";
// console.log(ret2);
// let ret2="World";
// console.log(ret1);
// console.log(ret2);

// 1) undefined
// Hoisting이란 var 키워드를 사용하여 변수를 선언 시, 해당 변수가 속한 범위(scope) 최상단으로 올려버리는 현상을 일컽습니다. 그리고 주목할 점은 여기서 속한 범위는 다른 언어처럼 block 레벨이 아니라 function 레벨이라는 점입니다. 따라서, 첫번째 console.log(n)이 실행될 시점에서는 n에 어떤 값도 할당되지 않았기 때문에 undefined가 출력되었던 것입니다.

// 2)  error
// let을 사용하면 항목을 초기화하기 전에 접근했다고 에러를 반환합니다. 아무것도 선언 안되어있음

// 3) Hello
// ret1에 대한 변수가 위에 선언 되어있음

// 4) World
// ret2에 대한 변수가 위에 선언 되어있음 

// 12. 
// x > 0
// 0 < y < 9 

// A : 1 ~ x,  y 가 포함된 값
// B : 1 ~ x, y가 포함된 수들의 핪
// C : 1 ~ x, y가 포함된 수들의 곱

// 1부터 

// function solution(x, y){
//     result = []
//     let num = [];
//     let sum = 0;
//     let mul = 1;

//     if (y < 0 || y > 9 || x <= 0 ){
//         return [0,0,0]
//     }

//     for (let i = 1; i <= x; i++){
//         a = String(i).includes(String(y))
        
//         if (a == true){
//             num.push(a) 
//             sum += Number(i)
//             mul *= Number(i)
//         }
//     }
//     result.push(num.length, sum, mul)
//     return result
// }

// console.log(solution(20, 0));


// 13.
// function solution(data){
//     let temp = []
//     for (let i = 0; i < data.length; i++){
//         if(typeof(data[i]) == 'string'){
//             temp.push(data[i]);
//         }
//     }

//     for(var t =0 ; t<temp.length ;t++){
//     var boolean =false;
//      for(var i =0 ; i<data.length;i++){
//          if(temp[t]===data[i]){
//              boolean =true;
//              data.splice(i,1)
//              i--;
//          }
//      }
//      if(boolean){
//         temp.splice(t,1);
//          t--;
//      } 
//  }
//  return data
// }

// console.log(solution([1, 'a', 'b', 2]))

// 14. 
// LISP : 
// (defun whatIsFunction(L)
//     (cond ((null L ) L ) 
//         ((member (car L ) (cdr L ))
//             (whatIsFunction(cdr L )))
//             (t (cons (car L ) (whatIsFunction(cdr L))))))

// Erlang : 
// whatIsFunction() -> 
//     List [1,1,2,3,4,5,'a', 'b', 5, 'a', 6],
//     Set = sets:from_list(List),
//     sets:to_list(Set).

// 15. 
// function pair(s){
//     var result = true;
//     var s_arr =[];
//     var map = {
//       '(':')',
//       '[':']',
//       '{':'}'
//     }
//     for (var i=0; i<s.length; i++){
//       if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
//         s_arr.push(s[i]);
//       }
//       else if(s[i]===")" || s[i]==="]" || s[i]==="}") {
//         var s_key = s_arr.pop();
//         if(s[i]!==map[s_key]){
//           return false;
//         }
//       }
//     }
//     if(s_arr.length!==0){
//       result = false;
//     }
//     return result;
//   }

// console.log(pair('()[]{}'))
// console.log(pair('([{}])'))
// console.log(pair('{[((})]}'))



// 16. 

// const range = {
//     from: 1,
//     to: 10,
  
//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },
  
//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };

// for (let num of range){
//     console.log(num);
// }

// 19.
// DELETE n1 FROM blind_member n1, blind_member n2 WHERE n1.id > n2.id AND n1.name = n2.name
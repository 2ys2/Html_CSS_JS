/* main5 */
//function


//화살표함수 ( ) => { }
console.log("-------------13-------------")
const arrowfun2 = x => { { name: 'Yuna' } }
console.log( 'arrowfun2 : ', arrowfun2 ); //arrowfun2 :  x => { { name: 'Yuna' } }
console.log( 'arrowfun2 : ', arrowfun2(x.name) ); //arrowfun2 :  x => { { name: 'Yuna' } }

console.log("-------------12-------------")
const arrowfun = x =>  [1, 2, 3]
console.log( 'arrowfun : ', arrowfun() ); //arrowfun :  (3) [1, 2, 3]

const arrowfun1 = x =>  [1, 2, 3, x]
console.log( 'arrowfun1 : ', arrowfun1(7) ); //arrowfun2 :  (4) [1, 2, 3, 7]

console.log("-------------11-------------")
const sum11 = ( ) =>  {console.log("hello")} // 매개변수없을때 ( ) 생략 불가능
sum11()

console.log("-------------10-------------")
const sum10 = ( ) =>  1000 //return 받는 타입
console.log( 'sum10 : ', sum10() );

console.log("-------------9-------------")
const sum9 = x =>  x + 500
console.log( 'sum9 : ', sum9(5) );

console.log("-------------8-------------")
const sum8 = (x) =>  x + 300
console.log( 'sum8 : ', sum8(5) );

console.log("-------------7-------------")
//const sum7 = (x, y) => { return x + y }
const sum7 = (x, y) =>  x + y
console.log( 'sum7 : ', sum7(11, 22) );

console.log("-------------6-------------")
const sum6 = (x, y) => {
	return x + y
}
console.log( 'sum6 : ', sum6(1, 2) );

console.log("-------------5-------------")
const sum5 = function(x, y){
	return x + y
}
console.log( 'sum5 : ', sum5(100, 200) );

console.log("-------------4-------------")

function sum4() {
	console.log(arguments) //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
	return arguments[0]
}
console.log(sum4(100, 7, 3));
//console.log(sum4(7, 3)); //Arguments(2) [7, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//console.log(sum4());

console.log("-------------3-------------")
const sum3 = function(x, y){
	return x + y
}
const c = sum3(1, 1)
console.log(c);
console.log( sum3(10, 20));

console.log("-------------2-------------")
function sum2(x, y) {
	return (x + y)
}
const a = sum2(10, 20)
const b = sum2(5, 10)
console.log(a + b)
console.log(sum2(1,1) + sum2(5, 10))  

console.log("-------------1-------------")
function sum(x, y) {
	console.log(x + y)
}
sum(1,3)
sum(5,7)

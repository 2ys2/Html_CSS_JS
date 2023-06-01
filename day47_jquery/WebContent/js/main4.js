/* main4 */
//함수
//function name() { }
//functio name(val, val2, ...) { }
//functio name() { return value; }


//즉시실행함수 1) (x)(), 2) (x())
//함수호출없이 바로 실행
const xy = 7
function double() { //함수정의부
	console.log(xy * 2);
}
double() // 함수호출
console.log("----------------------------------------");
(function square(x){
	console.log(x * x);
} (2) );
console.log("----------------------------------------");
(function(){
	console.log(xy * 2);
} ());
console.log("----------------------------------------");
// 변수의 유효범위 ( var vs let ) 
//var - 함수레벨
function scope(){//함수정의부
	if ( true ){
		var y = 123;
		console.log(y);
	}	
		console.log(y); //안나오는게 맞는데 나옴
}
scope();
//let, const - 블럭레벨
function scope2(){//함수정의부
	if ( true ){
		let y = 456;
		console.log(y);
	}	
		//console.log(y); //error
}
scope2();
console.log("----------------------------------------");
//형 변환
//참 : true, {}, [], 1.2, 'false', -12, '3.45', 12.34 ...
//거짓 : false, ' ', null, undefined, 0, -0, NaN
if( true) { //if('false') {//if( !0 )}
	console.log(12345);
}

const a = 1;
const b = 1;
console.log(a == b);


console.log("----------------------------------------");
//화살표 함수
// () => { } functiion() { }

//const doubleArrow = (x) => {
//	return x*5
//}
// const doubleArrow = (x) => { return }x*5 }
const doubleArrow = (x) => x*5
console.log('doubleArrow:', doubleArrow(3))

function double(){
	console.log (xy * 2);
}
const double1 = () => { console.log(xy * 2);}

const double2 =  x  => {
//const double2 = ( x ) => {
//const double2 = function(x, y) {
	//return x*2;
	return x*y;
}

const double3 = (x) => { return x * 2};

//const double4 =  x, y => { //2개 이상은 괄호 생략 불가
const double4 =  (x, y) => {
	//return x*2;
	return x*y;
}

const double5 = (x, y) => { x * y;}
//console.log('double5 : ', double5(6,7));

/*
const double2 = function( x ){
//const double2 = function(x, y) {
	//return x*2;
	return x*y;
}
console.log('double2 : ', double2(6,7));
console.log('double2 : ', double2(5));
*/
















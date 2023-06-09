/* main.js
표기법  - 4가지
  camelCase  : getName, thisIsMyFunction(),...
  PascalCase  : GetName, ThisIsMyFunction(),...
  snakeCase  :  get_name, this_is_my_function(),....
  kebabCase :  get-name, this-is-my-function(),....
 - 참고 : https://forgiveall.tistory.com/563
 
Zero-based Numbering : 0 기반 번호 매기기!
*/
// var vs let vs counst 

let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(new Date('2023-05-30'));
console.log(new Date('2023-05-30').getDay()); // 화요일
console.log(new Date('2023-06-03').getDay());
console.log(new Date('2023-05-30').getFullYear());

// String (문자 데이터):따옴표를 사용한다.
let myName = "Doyeon";
let email = 'kinsmile@sjc.acu.kr';
// let hap = '안녕하세요.' + MyName + '입니다.';
let hap = '안녕하세요. &{myName} 입니다. 반가워요';
//let help
console.log(myName);
console.log(email);
console.log(hap);
console.log('my mail ${email} 여기로 연락요망');

//var num = 100;
//var type 뒤에 오는 값에 의해 결정됨 = 100 정수, 10.0 double, true boolean 등..
//Number(숫잩 데이터): 정수 및 부동소숫점 숫자
let num = 100;
console.log(num);
num = 99;
console.log(num);
let opacity = 1.34;
console.log(opacity);

//Boolean(불린 데이터) : true, false 논리데이터
let checked = true;
let isShow = false;
console.log(checked);
console.log(isShow);

//Undefined : 값이 할당되지 않은 상태
let undef; // 초기화 안되어 있으면...
let obj = { pass:1234, pwd:'abc' }

console.log(undef); //undefined
console.log(obj.pass);
console.log(obj.pwd);
console.log(obj.id); //undefined

//Null : 어떤 값이 의도적으로 비어있음을 의미
let empty = null;
console.log(empty); //null

//Object (객체 데이터) : 여러 데이터를 Key:Value 형태로 저장 { }
let user = {
	//Key:Value
	name : 'doyeon',
	age : 33,
	isValid : true
};
console.log(user); // 전체
//console.log(user.isValid);
//console.log(user.age);
console.log(user.name); //낱개

//Array(배열 데이터):여러 데이터를 순차적으로 저장 [ ]
fruits =  ['Apple1', 'Banana2', 'Cherry3'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//변수 선언 - 재사용(재할당)이 가능
let a = 2;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
a = 12;
b = 99;
console.log(a);
console.log(b);

//값(데이터)의 재할당 불가능!!!
const x = 15;
console.log(x);
//x = 9878;
//console.log(x); //Uncaught TypeError: Assignment to constant variable.

//예약어
//let this = 'Yuna';
//console.log(this);

//함수선언
function myFun() {
	//실행 코드
	console.log(1004);
}
//함수 호출
myFun();

//return type method
function returnFun() {
	return 300;
}
console.log(returnFun());
let call = returnFun();
console.log(call);

function sum(x, y) { //x, y는 매개변수(Parameters)
	return x + y;
}
//재사용
let c = sum(1,2);
let d = sum(7,12);
let e = sum(3,4);
console.log(c, d, e);

//기명(이름이 있는) 함수
function hello() {
	console.log("Hello!!!");
}
//익명(이름이 없는) 함수
let world = function() {
	console.log("World~~~");
}
//함수 호출
hello();
world();
//객체 데이터
const person = {
	name:"Doyeon",
	age:85,
	//method
	getName: function(){
		return this.name;
		//return name; // 출력X
	},
	getAge: function(){
		return this.age;
	}
}
const hisName = person.getName();
console.log(hisName);
//또는
console.log(person.getName());
console.log(person.getAge());
console.log(person.age); //key값으로 가져오기..





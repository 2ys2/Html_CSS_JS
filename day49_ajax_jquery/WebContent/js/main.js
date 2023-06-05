/* main  */
const Person = {
	name : 'Yuna'
	, age : 22
	, email : 'kingsmail@sjcu.ac.kr'
	, address : 'Busan'
}

//const [] = []
const { name, age, email, address, phone='010-1234-5678' } = Person
console.log(`user Name : ${name} 입니다`)
console.log(`${name}의 나이는 ${age}세 입니다`)
console.log(`${name}의 이메일주소는 ${email} 입니다`)
console.log(address)
//console.log('phone', phone) //undefined

const { irum, nae } = Person
console.log(irum)
console.log(Person.address)

console.log('----------------------------------')


const keys = Object.keys(Person)
console.log(keys)
console.log(Person['name'])
console.log(Person['email'])
console.log(Person.email)

const values = keys.map(key => Person[key])
console.log(values)

/*
function Person {
	ket = 'value'
	,key = 222
	,method = function(){
		
	}
}
const Person {
	ket : 'value'
	,key : 222
	,method : function(){
		
	}
}
*/



console.log('===================================')
const numbers = [1, 2, 3, 4, 5]
const fruits = ['Apple2', 'Banana2', 'Cherry2']

let [x, y] = [10,20] //구조분해할당
let [x1, y2, ...rest] = [10, 20, 3, 4, 5, 6, 7]

const [ff, g, h, i, j] = fruits
console.log('----------------------------------')
console.log(fruits) //['Apple', 'Banana', 'Cherry'] - 배열
console.log(...fruits) //Apple Banana Cherry


console.log('**********************************')
/*
//function toObject(xx, yy, zz){
function toObject(xx, yy, ...zz){
	return {
		xx: xx
		,yy: yy
		,zz: zz
	}
} */
function toObject(xx, yy, ...zz){
	return {
		xx
		,yy
		,zz
	}
}
console.log(toObject(...fruits));
//console.log(toObject(fruits[0], fruits[1], fruits[2]));


console.log('**********************************')
const [, z] = fruits
console.log(ff, z) //Apple Banana
//const [, , z] = fruits //Cherry
console.log('----------------------------------')
console.log(fruits)
console.log(ff)
console.log(i)



console.log('----------------------------------')
// .splice()

fruits.splice(2, 0, 'Orange')//['Apple', 'Banana', 'Orange', 'Cherry']
console.log(fruits)

//numbers.splice(2,1)
//numbers.splice(2, 0, 99) //[1, 2, 99, 3, 4, 5]
numbers.splice(2, 1, 99) //[1, 2, 99, 4, 5]
console.log(numbers)


console.log('----------------------------------')
// .push(), .unshift(), reverse()
//원본 수정돔
numbers.push(7)
console.log(numbers) //(6) [1, 2, 3, 4, 5, 7]
numbers.unshift(0)
console.log(numbers) //(7) [0, 1, 2, 3, 4, 5, 7]

numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)

console.log('----------------------------------')
// .includes()
const e = numbers.includes(3)
console.log(e) //true
const f = numbers.includes('DoYeon')
console.log(f) //false



console.log('----------------------------------')
// .find(), .findIndex()

const c = fruits.find( item => {
	return /^C/.test(item) //C로 시작하는 아이템있니?
})
console.log(c) //Cherry

const d = fruits.findIndex( item => /^B/.test(item))
console.log(d) //1



console.log('----------------------------------') 
// .filter()

//const a = numbers.map( function(num) => {
const a = numbers.map( num => {
	return num < 3
});
	console.log(a) //(5) [true, true, false, false, false]
	
/*	const b = numbers.filter( num => {
	return num < 3
});
	console.log(b) //(2) [1, 2] */

//const b = numbers.filter( num => { return num > 3 });
const b = numbers.filter( num => num > 3 );
console.log(b) //(2) [4, 5]
console.log(numbers) //(5) [1, 2, 3, 4, 5]






/* main7 */

const person = {
	firstName: 'DoYeon'
	,lastName: 'Lee'
	,getFullName: function() {
		return `${this.firstName} ${this.lastName}`
	}
	,setFirstName: function(data){
		this.firstName = data;
	}
}
console.log(person);
console.log(person.lastName);
person.setFirstName('Yuna');
console.log(person.getFullName());
console.log(person);

const any = {
	firstName: 'Any'
	,lastName: 'Clarke'
	,getFullName: function() {
		return `${this.firstName} ${this.lastName}`
	}
	,setFirstName: function(data){
		this.firstName = data;
	}
}
console.log(any);
console.log(any.firstName);
any.setFirstName('KimKim')
console.log(any.getFullName());


function User(first, last){
	this.firstName = first;
	this.lasttName = last;
	this.getFullName = function() {
		return `${this.firstName} ${this.lastName}`
	}
}
const saram = User('person', 'any');
console.log(saram);
console.log();
/*

//this
//일반(Normal) 함수는 호출 위치에서 this 정의
//화살표(Arrow) 함수는 자신이 선언한 함수 범위에서 this 정의

function User(name) {
	this.name = name;
}

/*
User.prototype.arrow = () => {
	console.log(this.name);
}

const doyeon = {
	name : 'DoYeon',
	normal : function(){
		console.log(this.name);
	}
}
/*
const doyeon = {
	name : 'DoYeon',
	normal : function(){
		console.log(this.name);
	},
	arrow: () => {
		console.log(this.name);
	}
}

const doyeon2 = new User('Yuna') 
doyeon.normal() //DoYeon
doyeon.arrow()

*/




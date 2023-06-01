/* main7 */

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
*/
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





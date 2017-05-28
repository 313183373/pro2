let Person = require('./person')
// Write your code here
module.exports =function Student(name,age,class){
	Person.call(this);
	this.name=name;
	this.age=age;
	this.class=class;
}
Student.prototype=new Person();
Student.prototype.introduce=function(){
	console.log('My name is '+this.name+'. I am '+this.age+' years old. I am a Student. I am at Class '+this.class+'.');
};
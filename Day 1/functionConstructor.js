
'use strict';
function Person(name){
	this.name = name;
}

const TeacherA = new Person("Maria");
const TeacherB = new Person("Nati");

Person.prototype.teach = function(subject){
	console.log(this.name + " is now teaching " + subject);
}

TeacherA.teach("math");


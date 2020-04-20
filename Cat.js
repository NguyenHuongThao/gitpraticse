var Mouse = require('./Mouse');
function Cat(name){
 this.stomach = [];
 this.name = name;

}
Cat.prototype.eat = function(animal){
	if( animal instanceof Mouse){
		this.stomach.push(animal);	
	} else {
		throw new Error ('Cat can only eat Mouse');
	}
	
}
module.exports = Cat;
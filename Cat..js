function Cat(){
 this stomach =  [];
}
Cat.prototype.eat = function(mouse){
	Cat.stomach.push(mouse);
}
module.exports = Cat;
function Mouse(name,color){
	this.name = name;
	this.dead = false;
	this.color = color;
}

Mouse.prototype.die = function(){
	this.dead = true;
};
module.exports = Mouse;
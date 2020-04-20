var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog('Key');



var cat = new Cat('tom');
var mouse = new Mouse('Mikey','yellow');
try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while catch eating a dog');

}

cat.eat(dog);
console.log(cat);


var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var dog = new Dog('Key');
var tom =  new Cat('Meo');


var mouse = new Mouse();

dog.eat(tom);
console.log(dog);
tom.eat(mouse);

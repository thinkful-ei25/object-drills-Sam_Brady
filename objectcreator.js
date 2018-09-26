'use strict';
function createMyObject(){
   return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly' : 'oxen free',
        sayHello: function(){
            return 'hello';
        }
   }; 
}

console.log(createMyObject());
const test = createMyObject();
console.log(test.sayHello());
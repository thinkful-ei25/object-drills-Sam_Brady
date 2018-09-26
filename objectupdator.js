'use strict';
function updateObject(obj){
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    return obj;
}

const test = {};
console.log(updateObject(test));
const test2 = {
    foo: '',
    bar: '',
    bizz: ''};
console.log(updateObject(test2));

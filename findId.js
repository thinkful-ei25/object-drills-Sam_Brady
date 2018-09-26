'use strict';

const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];

function findByID(items, idNum){
    return items.find(item => item.id === idNum);
}

console.log(findByID(scratchData, 22));
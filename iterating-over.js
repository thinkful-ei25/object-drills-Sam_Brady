'use strict';
const obj = {
    foo : 'who',
    bar : 'what',
    fum : 'when',
    quux: 'where',
    spam: 'why'
}

for(const item in obj){
    console.log(`${item} : ${obj[item]}`);
}
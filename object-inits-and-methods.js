'use strict';
const loaf = {
    flour : 300,
    water : 210,
    hydration : function(){
        return this.water/(this.flour)*100+'%';
    }
};

console.log(loaf);
console.log(loaf.hydration());
'use strict';
function decode(arr, cipher){

    const decoded = arr.map(word =>{
        let temp;
        if(cipher[word[0]]){
            temp = cipher[word[0]] - 1;
        }
        if(temp){
            return word[temp];
        } else {
            return ' ';
        }
    });
    return decoded.join('');
}
    
function decodedWords(sentence,cipher){
    let arr = sentence.split(' ');
    return decode(arr, cipher);
}
    
const cipher ={
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

let decode1  = ('craft block argon meter bells brown croon droop');
console.log(decodedWords(decode1, cipher));

    
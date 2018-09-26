'use strict';
const person1 = {
    name : 'John Doe',
    jobTitle: 'Accountant'
};

const person2 = {
    name : 'Jane Doe',
    jobTitle: 'Analyst'
};

const person3 = {
    name : 'Jon Snow',
    jobTitle: 'King of the North'
};

const person4 = {
    name : 'Jane Poe',
    jobTitle: 'CFO'
};

const person5 = {
    name : 'Elon Musk',
    jobTitle: 'Crazy Twitter Personality'
};

const array1 = [person1, person2, person3, person4, person5];

array1.forEach(function(element){console.log(`${element.name}, ${element.jobTitle}`);});
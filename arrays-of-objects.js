'use strict';
const person1 = {
    name : 'John Doe',
    jobTitle: 'Accountant',
    boss: 'Jon Snow'
};

const person2 = {
    name : 'Jane Doe',
    jobTitle: 'Analyst',
    boss: 'Jon Snow'
};

const person3 = {
    name : 'Jon Snow',
    jobTitle: 'King of the North'
};

const person4 = {
    name : 'Jane Poe',
    jobTitle: 'CFO',
    boss: 'Jon Snow'
};

const person5 = {
    name : 'Elon Musk',
    jobTitle: 'Crazy Twitter Personality',
    boss: 'Jon Snow'
};

const array1 = [person1, person2, person3, person4, person5];

//array1.forEach(function(element){console.log(`${element.name}, ${element.jobTitle}`);});

array1.forEach(function(element){
    if(!element.boss){
        console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
    } else {
        console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
    }
});
'use strict';
function createCharacter(name, nickname, race, origin, attack, defense){
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe(){
            return (`${this.name} is a ${this.race} from ${this.origin}`);
        },
        evaluateFight(obj){
            let x = (this.attack - obj.defense) < 0 ? this.attack - obj.defense : 0;
            let y = (obj.attack - this.defense) < 0 ? obj.attack - this.defense : 0;
            return `Your opponent takes ${x} damage and you receive ${y} damage`;
        }
    };
}


const characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5), 
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8)];

characters.push(createCharacter('Arwen Undomiel', 'A','Half-Elf', 'Rivendell', 5,5));


function findCharacterByNickname(arr, nickname){
    return arr.find(char => char.nickname === nickname).describe();
}

console.log(findCharacterByNickname(characters, 'aragorn'));

function filterCharactersByRace(arr, race){
    return arr.filter(char => char.race === race);
}

console.log(filterCharactersByRace(characters,'Hobbit'));

function filterCharactersByAttack(arr, value){
    return arr.filter(char => char.attack >= value);
}

console.log(filterCharactersByAttack(characters,5));
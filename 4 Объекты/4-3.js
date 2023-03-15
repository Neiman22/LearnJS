//Концепция достижимости
function marry (man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    }
}

const family = marry({
    name: 'Artem'
},{
    name: 'Natasha'
})
console.log(family.father);
delete family.father;
delete family.mother.husband; //оставит ссылку на объект
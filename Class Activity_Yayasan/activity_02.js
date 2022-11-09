const people= [
    {name:'sara',id:1, age:19},
    {name:'kim',id:2, age:21},
    {name:'john',id:3, age:18},
    {name:'han',id:4, age:22}
];

val = people[2].id;

for(let i = 0 ; i <people.length ; i++){
    console.log(people[i].id);
}

people.forEach(function(person){
    console.log(person.id);
})

// plural.forEach(function(singular){
//     console.log(person.id);
// })



function printAllUsers(users) {
    for(let i = 0; i < users.length; i++) {
        const info = users[i].name + "'s age is " + users[i].age;
        console.log(info);
    }
}


let users = [
    {name: "Abhra Mondal", age: 21},
    {name: "Subhra Mondal", age: 29}
];
printAllUsers(users);
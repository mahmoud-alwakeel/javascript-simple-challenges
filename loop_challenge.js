//Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Angad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];
//console.log('we Have X Admins');
let admins = []
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    admins.push(myAdmins[i])
}
console.log(`we have ${admins.length} admins`)

for (let j = 0; j < admins.length; j++) {
    console.log(`the admins for Team ${j + 1} is ${admins[j]}`)
    console.log('Team members:')
    let teamMembers = myEmployees.filter(employee => employee.startsWith(admins[j][0]))
    for (let h = 0; h < teamMembers.length; h++) {
        console.log(`${h + 1} ${teamMembers[h]}`)
    }
}
/*
we want the output like this
We Have 3 Admins
The Admin For Team 1 Is Ahmed
Team Members:
- 1 Amgad
-2 Ameer
-3 Amany
-4 Anwar
The Admin For Team 2 Is Osama
Team Members:
- 1 Omar
- 2 Othman
The Admin For Team 3 Is Sayed
Team members:
- 1 Samah
- 2 Samia
*/

// older answer :
/*
let admins = []
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    admins.push(myAdmins[i])
}
console.log(`We have ${admins.length} Admins`)

for (let j = 0; j < admins.length; j++) {
    console.log(`The Admin for Team ${j + 1} is ${admins[j]}`)
    console.log('Team Members:')
    for (let h = 0; h < myEmployees.length; h++) {
        if (admins[j][0] === myEmployees[h][0]) {
            console.log(`- ${h + 1} ${myEmployees[h]}`)
        }
    }
}
*/
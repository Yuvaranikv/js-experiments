let Lastname,Firstname;

function parseAndDisplayName(name)
{
let name1 = name;
console.log(`Name: ${name1}`)
let Firstnameindex=name1.indexOf(" ")

 Firstname=name1.substring(0,Firstnameindex);

let lastnameindex=name1.slice(Firstnameindex)

Lastname=lastnameindex;


}
parseAndDisplayName("Brenda Kaye");
console.log(`FirstName: ${Firstname}`)
//console.log(`Name: ${name1}`)
console.log(`LastName: ${Lastname}`)
parseAndDisplayName("Ian Auston");
console.log(`FirstName: ${Firstname}`)
//console.log(`Name: ${name1}`)
console.log(`LastName: ${Lastname}`)
parseAndDisplayName("Siddalee Grace");
console.log(`FirstName: ${Firstname}`)
//console.log(`Name: ${name1}`)
console.log(`LastName: ${Lastname}`)




let nameEnter;
do{
nameEnter = prompt(`Enter Your Name`);
if(nameEnter) nameEnter = nameEnter.trim();
}while(!nameEnter)


let lastNaneEnter;
do{
    lastNaneEnter = prompt(`Enter Your last Name `);
    if(lastNaneEnter) lastNaneEnter = lastNaneEnter.trim();
    }while(!lastNaneEnter)
    

let emailEnter;
do{
    emailEnter = prompt(`Enter Your email `);
    if(emailEnter) emailEnter = emailEnter.replaceAll(` `,` `).toLowerCase()
    }while(!emailEnter || !emailEnter.includes(`@`) || !emailEnter.indexOf(`@`) === -1)
    console.log(emailEnter)


let earEnter = prompt (` Enter yuo age?`);
while(!earEnter || isNaN(earEnter)){
    earEnter = prompt (` What yuor name?`);
}
let age = new Date().getFullYear() - earEnter;

console.log(nameEnter)
console.log(lastNaneEnter)
console.log(emailEnter)
console.log(age)











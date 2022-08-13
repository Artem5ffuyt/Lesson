


let nameEnter;
do{
nameEnter = prompt(`Enter Your Name`);
if(nameEnter) nameEnter = nameEnter.trim();
}while(!nameEnter)


let lastNameEnter;
do{
    lastNameEnter = prompt(`Enter Your last Name `);
    if(lastNameEnter) lastNameEnter = lastNameEnter.trim();
    }while(!lastNameEnter)
    

let emailEnter;
do{
    emailEnter = prompt(`Enter Your email `);
    if(emailEnter) emailEnter = emailEnter.replaceAll(` `,` `).toLowerCase().trim()
    }while(!emailEnter || !emailEnter.includes(`@`) || !emailEnter.indexOf(`@`) === -1)
    


let earEnter = prompt (` Enter yuo age?`);
if(emailEnter) emailEnter = emailEnter.replaceAll(` `,` `).trim()
while(!earEnter || isNaN(earEnter)){
    earEnter = prompt (` What yuor name?`);
}
let age = new Date().getFullYear() - earEnter;



document.write
(`<ul>
		<li>Full name:${nameEnter}  ${lastNameEnter}</li>
		<li>Email:${emailEnter} </li>
        <li>Age:${age}</li>
  </ul>`);











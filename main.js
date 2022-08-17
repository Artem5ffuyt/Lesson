


let enterWorda;
let enterWordb;
let entWords = 3;
let finalStr = ` `;

let entConf = confirm(`Tell me three most important words 💚.`);

   if(entConf) {
   for(let i = 1; i <= entWords; i++){
    do{
     enterWorda = prompt(`Enter word #${i} `);
    }while( !enterWorda )

    do{
     enterWordb = prompt(`choose type of transformation for #${enterWorda}  uppercase | lovercase | capitalize `);
    }while( !enterWordb )
     finalStr += `${enterWorda}`;
     finalStr = finalStr.trim()
     if(enterWordb = `uppercase `) {
        console.log(enterWorda.toUpperCase())
    }if(enterWordb = `lovercase`){
        console.log(enterWorda.toLowerCase()) 
    }if(enterWordb = `capitalize`){
        console.log(enterWorda.toLowerCase()) 
    }
   }
} 



























let array = [];
let lenArray;
let enterRandMin;
let enterRandMax;
do{
lenArray = Math.round(+prompt(`Enter the length of the array 2-10`)) ;
}while(!lenArray  || lenArray < 2 || lenArray > 10);


do{
enterRandMin = Math.round(+prompt(`Enter min. random number -10 - 10`));  
}while(!enterRandMin || enterRandMin < -10 || enterRandMin >10);

do{
enterRandMax = Math.round(+prompt(`Enter max. random number before 50 `));  
}while(!enterRandMax || enterRandMax <= enterRandMin || enterRandMax > 50);

for(let i=0; i<lenArray; i++){
    array[array.length] = getRandomInt(enterRandMin , enterRandMax)
    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  

  let min = Math.min(...array);
  let max = Math.max(...array);

let indexOffMin = array.indexOf(min);
let indexOffMax = array.indexOf(max);
array[indexOffMin] = max;
array[indexOffMax] = min;

 

console.log(min, array.indexOf(min));
console.log(max, array.indexOf(max)); 
console.log(array); 
















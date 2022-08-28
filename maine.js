sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summer_sports = sports.slice(5);



let frutis = summer_sports.splice(2,2)

    
 
let winter_sports = sports
    winter_sports.length = 4 

document.write(`<div> 
<lu>**** Winter_sports ***** </lu>
<li>${winter_sports}</li>
<lu>**** Summer_sports ***** </lu>
<li>${summer_sports}</li>
<lu>**** Frutis ***** </lu>
<li>${frutis}</li>
</div>`

)
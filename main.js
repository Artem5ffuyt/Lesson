

let entConf = confirm(`Tell me three most important words 💚`);

if (entConf) {
  const threeWords = 3;
  let  enterWords = ` `;
  

  for (let i = 1; i <= threeWords; i++) {
    let word;
    do {
      word = prompt(`Enter word #${i}`);
    } while (!word || word.match(/\d/));



    let choicePrompt;
    do {
        choicePrompt = prompt(`uppercase, lowercase, capitalize`);
      if(choicePrompt) choicePrompt = choicePrompt.replaceAll(` `,``).toLowerCase();
    } while (!choicePrompt || (choicePrompt !== `uppercase` && choicePrompt !== `lowercase` && choicePrompt !== `capitalize`));


    switch (choicePrompt) {
      case `uppercase`:
        word = word.toUpperCase();
        break;
      case `lowercase`:
        word = word.toLowerCase();
        break;
      case `capitalize`:
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        break;
    }

    enterWords += word;
    enterWords += i === threeWords ? `!` : ` `;
  }

  console.log( enterWords);
}



































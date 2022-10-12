//random game selector
//arrays of available games categorized by player count or type
const twoToFour = [`Azul`, `7 Wonders Duel`, `Oceans`, `Everdell`, `Settlers of Catan`];

const fivePlus = [`Betrayal at House on the Hill`, `7 Wonders`, `Everdell Expansion`, `The Crew`, `Mysterium`];

const partyGame = [`Wavelength`, `Pictionary`, `Codenames`, `One Night: Werewolf`, `Throw Throw Burrito`];


const getGameOne = () => {
    let recOne = twoToFour[(Math.floor(Math.random()*5))];
    document.getElementById('first_rec').innerHTML = recOne;
};

const getGameTwo = () => {
    let recTwo = fivePlus[(Math.floor(Math.random()*5))];
    document.getElementById('second_rec').innerHTML = recTwo;
};

const getGameThree = () => {
    let recThree = partyGame[(Math.floor(Math.random()*5))];
    document.getElementById('third_rec').innerHTML = recThree;
};

const getGameRecs = () => {
    let recOne = twoToFour[(Math.floor(Math.random()*5))];
    let recTwo = fivePlus[(Math.floor(Math.random()*5))];
    let recThree = partyGame[(Math.floor(Math.random()*5))];

    console.log(`2 to 4 player Game: ${recOne}
5+ Player Game: ${recTwo}
Party Game: ${recThree}`)
};

let firstButton = document.getElementById('first_button');
let secondButton = document.getElementById('second_button');
let thirdButton = document.getElementById('third_button');
let firstRec = document.getElementById('first_rec');
let secondRec = document.getElementById('second_rec');
let thirdRec = document.getElementById('third_rec');

firstButton.addEventListener('click', getGameOne);
secondButton.addEventListener('click', getGameTwo);
thirdButton.addEventListener('click', getGameThree);

//Game night page
//collapsing game list

let listNo = document.getElementById('listNo');
let buttonNum = document.getElementById('buttonNum');

const collapse = () => {
    let isCollapsed = 0;

    if (isCollapsed === 0){
        listNo.display = 'block';
        isCollapsed += 1;
    } else {
        listNo.display = 'none';
        isCollapsed -= 1;
    }
};

buttonNum.addEventListener('click', collapse);
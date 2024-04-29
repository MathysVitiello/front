
const dataSet1 = [
    ['Mathys', 'Alex', '3', '0' ],
    ['Mathys', 'Nil', '1', '0' ],
    ['Mathys', 'Vincent', '0', '2' ],
    ['Mathys', 'Nil', '1', '0' ],
    ['Mathys', 'maman', '2', '3' ],
];

const dataSetTournament = [
    ['2', '3'],
    ['1', '3'],
    ['6', '6'],
    ['3', '4'],
    ['4', '10'],
    ['10', '20'],
];

const winrate = [
    ['7', '15'],
];

// find winrate (camembert chart) first number in wins
let totalGames = Number(winrate[0][0]) + Number(winrate[0][1]);

let multiplier = (100 / totalGames );
win = 3.6 * (Number(winrate[0][0]) * multiplier);
lose = 3.6 * (Number(winrate[0][1]) * multiplier);


var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

if (Number(winrate[0][0]) < Number(winrate[0][1])){
    //comme pb avec conic gradient du camembert, jechannge la couleur bon pas de soucis
    tmp = win;
    win = lose;
    lose = win;
    root.style.setProperty('--color1', 'rgb(128, 0, 53)' )
    root.style.setProperty('--color2', 'rgb(0, 174, 255)' )
} else {
    root.style.setProperty('--color1', 'rgb(0, 174, 255)' )
    root.style.setProperty('--color2', 'rgb(128, 0, 53)' )
}

root.style.setProperty('--win', win + 'deg')
root.style.setProperty('--lose', lose + 'deg')


// creates html for 1 vs 1
for(var i = 0; i < dataSet1.length; i++) {
        
    var box = document.createElement("div");
    box.id = "box";
    if (dataSet1[i][2] > dataSet1[i][3])
        box.classList.add('victory');
    else 
        box.classList.add('defeat');

    const name1 = document.createElement("div");
    name1.classList.add('name1');
    name1.appendChild(document.createTextNode(dataSet1[i][0]));
    
    const score = document.createElement("div");
    score.classList.add('score');
    score.appendChild(document.createTextNode(dataSet1[i][2] + ' - ' + dataSet1[i][3]));
    
    const name2 = document.createElement("div");
    name2.classList.add('name2');
    name2.appendChild(document.createTextNode(dataSet1[i][1]));
    
    box.appendChild(name1);
    box.appendChild(score);
    box.appendChild(name2);
    // console.log(box);
    document.getElementById("three").appendChild(box);
}

// creates html for tournaments
for(var i = 0; i < dataSetTournament.length; i++) {
        
    var box = document.createElement("div");
    box.id = "box2";

    if (dataSetTournament[i][0] == 1)
        box.classList.add('top1');
    else if (dataSetTournament[i][0] == 2)
        box.classList.add('top2');
    else if (dataSetTournament[i][0] == 3)
        box.classList.add('top3');
    else if (dataSetTournament[i][0] / dataSetTournament[i][1] == 1)
        box.classList.add('veryBad');
    else if (dataSetTournament[i][0] / dataSetTournament[i][1] < 0.5)
        box.classList.add('mid');
    else
        box.classList.add('bad');

 // ajouter une crown si premier

    const position = document.createElement("div");

    position.classList.add('position');
    position.appendChild(document.createTextNode(dataSetTournament[i][0]));
    
    const total = document.createElement("div");
    total.classList.add('total');
    total.appendChild(document.createTextNode('/ ' + dataSetTournament[i][1]));

    box.appendChild(position);
    box.appendChild(total);

    // console.log(box);
    document.getElementById("two").appendChild(box);
}



// ici le text du camembert
const div = document.getElementById('result');
const p = document.createElement('p');
p.textContent = winrate[0][0] + ' W - ' + winrate[0][1] + ' L';
div.appendChild(p);

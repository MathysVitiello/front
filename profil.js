

const dataSet = [
    ['Mathys', 'Alex', '3', '0' ],
    ['Mathys', 'Nil', '1', '0' ],
    ['Mathys', 'Vincent', '0', '2' ],
    ['Mathys', 'nil', '1', '0' ],
    ['Mathys', 'maman', '2', '3' ],
];

for(var i = 0; i < dataSet.length; i++) {
        
    var box = document.createElement("div");
    box.id = "box";
    if (dataSet[i][2] > dataSet[i][3])
        box.classList.add('victory');
    else 
        box.classList.add('defeat');

    const name1 = document.createElement("div");
    name1.classList.add('name');
    name1.appendChild(document.createTextNode(dataSet[i][0]));
    
    const score = document.createElement("div");
    score.classList.add('score');
    score.appendChild(document.createTextNode(dataSet[i][2] + ' - ' + dataSet[i][3]));
    
    const name2 = document.createElement("div");
    name2.classList.add('name');
    name2.appendChild(document.createTextNode(dataSet[i][1]));
    
    box.appendChild(name1);
    box.appendChild(score);
    box.appendChild(name2);
    console.log(box);
    document.getElementById("three").appendChild(box);


}
let hod = 0;
let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let allBlocks = document.getElementsByClassName('block');
let button = document.querySelector('button');
let turns = document.querySelector('p');
turns = 0;
let won = document.createElement('div');
won.classList.add("won");
let pl1 = document.getElementById('pl1');
let pl2 = document.getElementById('pl2');
let playersChange;



for (let i=0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}

document.getElementById('game').onclick = function(event){
    if(event.target.className === 'block'){
        console.log(event.target.innerHTML);
        if(hod % 2 == 0 && !event.target.innerHTML ){
        event.target.innerHTML = 'x';
        turns++;
        document.querySelector('p').innerHTML = turns;
        
        }else if(hod % 2 != 0 && !event.target.innerHTML){
        event.target.innerHTML = 'o';
        turns++;
        document.querySelector('p').innerHTML = turns;
        playersChange = true;
        }
        hod++;
        checkWinner();
        
    }
}

function checkWinner(){
    for(let i = 0; i < arr.length; i++){
        if(allBlocks[arr[i][0]].innerHTML == 'x' && allBlocks[arr[i][1]].innerHTML == 'x' && allBlocks[arr[i][2]].innerHTML == 'x'){
            allBlocks[arr[i][0]].style.color = 'green', allBlocks[arr[i][1]].style.color = 'green', allBlocks[arr[i][2]].style.color = 'green'; 
        }
        if(allBlocks[arr[i][0]].innerHTML == 'o' && allBlocks[arr[i][1]].innerHTML == 'o' && allBlocks[arr[i][2]].innerHTML == 'o'){
            allBlocks[arr[i][0]].style.color = 'green', allBlocks[arr[i][1]].style.color = 'green', allBlocks[arr[i][2]].style.color = 'green';
        }
    }
};

button.addEventListener('click', () => {location.reload()})




































// function checkWinner(){
//     ///x
//     let allBlocks = document.getElementsByClassName('block');
//     if(allBlocks[0].innerHTML == 'x' && allBlocks[1].innerHTML == 'x' && allBlocks[2].innerHTML == 'x'){
//         allBlocks[0].style.color = 'green', allBlocks[1].style.color = 'green', allBlocks[2].style.color = 'green'};
//     if(allBlocks[3].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[5].innerHTML == 'x'){
//         allBlocks[3].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[5].style.color = 'green'};
//     if(allBlocks[6].innerHTML == 'x' && allBlocks[7].innerHTML == 'x' && allBlocks[8].innerHTML == 'x'){
//         allBlocks[6].style.color = 'green', allBlocks[7].style.color = 'green', allBlocks[8].style.color = 'green'};
//     if(allBlocks[0].innerHTML == 'x' && allBlocks[3].innerHTML == 'x' && allBlocks[6].innerHTML == 'x'){
//         allBlocks[0].style.color = 'green', allBlocks[3].style.color = 'green', allBlocks[6].style.color = 'green'};
//     if(allBlocks[1].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[7].innerHTML == 'x'){
//         allBlocks[1].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[7].style.color = 'green'};
//     if(allBlocks[2].innerHTML == 'x' && allBlocks[5].innerHTML == 'x' && allBlocks[8].innerHTML == 'x'){
//         allBlocks[2].style.color = 'green', allBlocks[5].style.color = 'green', allBlocks[8].style.color = 'green'}; 
//     if(allBlocks[0].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[8].innerHTML == 'x'){
//         allBlocks[0].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[8].style.color = 'green'};
//     if(allBlocks[2].innerHTML == 'x' && allBlocks[4].innerHTML == 'x' && allBlocks[6].innerHTML == 'x'){
//         allBlocks[2].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[6].style.color = 'green'};    
//     ///o  
//     if(allBlocks[0].innerHTML == 'o' && allBlocks[1].innerHTML == 'o' && allBlocks[2].innerHTML == 'o'){
//         allBlocks[0].style.color = 'green', allBlocks[1].style.color = 'green', allBlocks[2].style.color = 'green'};
//     if(allBlocks[3].innerHTML == 'o' && allBlocks[4].innerHTML == 'o' && allBlocks[5].innerHTML == 'o'){
//         allBlocks[3].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[5].style.color = 'green'};
//     if(allBlocks[6].innerHTML == 'o' && allBlocks[7].innerHTML == 'o' && allBlocks[8].innerHTML == 'o'){
//         allBlocks[6].style.color = 'green', allBlocks[7].style.color = 'green', allBlocks[8].style.color = 'green'};
//     if(allBlocks[0].innerHTML == 'o' && allBlocks[3].innerHTML == 'o' && allBlocks[6].innerHTML == 'o'){
//         allBlocks[0].style.color = 'green', allBlocks[3].style.color = 'green', allBlocks[6].style.color = 'green'};
//     if(allBlocks[1].innerHTML == 'o' && allBlocks[4].innerHTML == 'o' && allBlocks[7].innerHTML == 'o'){
//         allBlocks[1].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[7].style.color = 'green'};
//     if(allBlocks[2].innerHTML == 'o' && allBlocks[5].innerHTML == 'o' && allBlocks[8].innerHTML == 'o'){
//         allBlocks[2].style.color = 'green', allBlocks[5].style.color = 'green', allBlocks[8].style.color = 'green'}; 
//     if(allBlocks[0].innerHTML == 'o' && allBlocks[4].innerHTML == 'o' && allBlocks[8].innerHTML == 'o'){
//         allBlocks[0].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[8].style.color = 'green'};
//     if(allBlocks[2].innerHTML == 'o' && allBlocks[4].innerHTML == 'o' && allBlocks[6].innerHTML == 'o'){
//         allBlocks[2].style.color = 'green', allBlocks[4].style.color = 'green', allBlocks[6].style.color = 'green'};   
// }
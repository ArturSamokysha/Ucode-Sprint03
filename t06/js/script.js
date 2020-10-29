
let button = document.getElementById('btn')
let block = document.getElementById('lab');
let text = document.getElementById('hero');




button.onclick = function(){
    if(hero.innerHTML === 'Bruce Banner'){
        hero.innerHTML = 'Hulk';
        hero.style.fontSize = '130px';
        block.classList.toggle('lab-2');
    }else{
        hero.innerHTML = 'Bruce Banner';
        block.classList.toggle('lab-2');
        hero.style.fontSize = '60px';
    }
}






// function transformation(element){
//     element.style.backgroundColor = '#70964b';
//     text.textContent = 'Hulk';
//     text.style.fontSize = '130px';
//     text.style.letterSpacing = '6px';

// }

    
    
// }

// button.onclick = () => {
//     if(lab.style.backgroundColor === '#ffb300') {
//         lab.style.backgroundColor === '#70964b'
//         text.textContent = 'Hulk';
//         text.style.fontSize = '60px';
//     } 
// }


// function transformation(element){
//     if(lab.style.backgroundColor === '#ffb300'){
//          lab.style.backgroundColor = 'green';
//         //  text.textContent = 'Hulk';
//         //  text.style.fontSize = '60px';
//     } 
//     else{
//         element.style.backgroundColor = '#ffb300';
//         text.textContent = 'Hulk';
//     }
// }



let ul = document.getElementById('characters');
let test = document.getElementsByClassName('good');
let val = document.querySelectorAll('li');

let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
let div4 = document.createElement('div');
let div5 = document.createElement('div');
let div6 = document.createElement('div');

div.classList.add('elem', 'air');
div2.classList.add('elem', 'fire');
div3.classList.add('elem', 'water');
div4.classList.add('elem', 'earth')
div5.classList.add('elem', 'none');
div6.classList.add('elem', 'line');

for (let i = 0; i < val.length; i++) {
    if (val[i].classList == '') {
        val[i].classList.add('unknown')
    }
}

for(let a = 0; a < val.length; a++){
    if(!val[a].hasAttribute('data-element')){
    val[a].insertAdjacentHTML('beforeend',`<div><div class='elem none'> <div class='line'></div> </div></div>`)
    val[a].style.width = '135px'
    
}
else if(val[a].getAttribute('data-element').includes('air water earth fire')){
        val[a].insertAdjacentHTML('beforeend', `<div> <div class='elem air'></div>  <div class='elem water'></div> <div class='elem earth'></div> <div class='elem fire'> </div></div>`)
        val[a].style.width = '135px'
    
}
else if(val[a].getAttribute('data-element').includes('fire')){
        val[a].insertAdjacentHTML('beforeend', `<div><div class='elem fire'></div></div></div>`)
        val[a].style.width = '135px'
}
else if(val[a].getAttribute('data-element').includes('water')){
        val[a].insertAdjacentHTML('beforeend', `<div><div class='elem water'></div></div></div>`)
        val[a].style.width = '135px'
}
else if(val[a].getAttribute('data-element').includes('earth')){
        val[a].insertAdjacentHTML('beforeend', `<div><div class='elem earth'></div></div></div>`)
        val[a].style.width = '135px'
}
}
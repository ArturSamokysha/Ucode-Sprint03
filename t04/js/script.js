
function concat(string1, string2){
    
    if(string2 == undefined){
        return function first(){
            if (first.count == undefined){
                first.count = 0
            }
            let x = prompt()
            return first.count += 1, string1.concat(" " + x);
        }
}else {
    return string1.concat(" " + string2)
}
}

let phrase1 = concat("Hulk", "smash!")
let output = phrase1
console.log(output);

let phrase2 = concat("Leave")
output = phrase2()
console.log(output)
console.log(phrase2.count);

output = phrase2();
console.log(output);

output = phrase2();
console.log(output);
console.log(phrase2.count);

let phrase3 = concat("Go");
output = phrase3();

console.log(output);
console.log(phrase3.count);
console.log(phrase2.count);

////////////////////////////////////////////////////////////////

// function concat(str1, str2){
//     if(str2 == undefined){
//         let x = prompt();
//         return str1.concat(" " + x)
//     }else {
//         return str1.concat(" " + str2)
// } 
// }

// let phrase1 = concat("Hulk","smash!");
// output = phrase1;
// console.log(output);

// let phrase2 = concat("Leave");
// output = phrase2;
// console.log(output);

// let phrase3 = concat("Go")
// output = phrase3;
// console.log(output);

//////////////////////////////////////////////////////////////////

// function urlGenerator(domain){
//     return function(url){
//         return `http://${url}.${domain}`
//     }
// }
// let comUrl = urlGenerator('com')
// let ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(ruUrl('google'));



// function calk(x){
//     return function(){
//         return 10 * x;
//     }
// }
// let y = calk(205)
// console.log(y());

/////////////////////////////////////////////////////////////////////


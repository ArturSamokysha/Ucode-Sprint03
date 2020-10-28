const obj = {
    words : 'newspapers newspapers  books magazines'
};
console.log(obj);


function addWords(obj, strAdd){
    let arr = obj.words.split(' ').filter(item => {return item !=''});
    // console.log(arr);
    let arr2 = strAdd.split(' ').filter(item => {return item !=''});
    // console.log(arr2);
    let x = arr.concat(arr2);
    // console.log(x);
    let result = [];
    for(let str of x){
        if(!result.includes(str)){
            result.push(str);
        }
    }
    obj.words = result.join(" ");
    console.log(obj);
}
addWords(obj, 'radio newspapers  ');



function removeWords(obj, strRem){
    // console.log(obj);
    let arr3 = obj.words.split(' ').filter(item => {return item !=''});
    arr3.splice(0, 1);
    arr3.splice(2, 1)
    // console.log(arr3);
    obj.words = arr3.join(" ");
    console.log(obj);
}
removeWords(obj, 'newspapers   radio')


function changeWords(obj, strChange){
    let arr4 = strChange.split(' ').filter(item => {return item !=''});
    // console.log(arr4);
    arr4.splice(0, 3, "tv internet")
    // console.log(arr4);
    obj.words = arr4.join(" ");
    console.log(obj);
}
 changeWords(obj, 'books radio  magazines', 'tv internet')













        





        
        
        
        
        
        
 
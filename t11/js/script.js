let add = document.querySelector('add');
let textarea = document.getElementById('txt');
let archive = document.getElementById('archive');
let cookieStr;
let cookie;
let arr = [];
let name = 0;

archive.innerHTML = '[Empty]';
    archive.style.backgroundColor = 'white';
    archive.style.width = '383px';
    archive.style.height = 'auto';
    archive.style.marginLeft = '10px';
    archive.style.marginBottom = '10px'; 

// cookieStr = document.cookie;
// cookie = cookieStr.split(';');
//     for(let i=0; i<cookie.lenght; i++){
//         arr.push(`-->${cookie[i]}<br>`)
//     }
//     archive.innerHTML = arr.join('');





function setCookies(){
//     cookieStr = document.cookie;
// cookie = cookieStr.split(';');
//     for(let i=0; i<cookie.lenght; i++){
//         arr.push(`-->${cookie[i]}<br>`)
//     }

    
    
    
    
    name++;
    archive.innerHTML = arr.join('');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = txt.value ;
    archive.appendChild(newDiv);
    archive.style.backgroundColor = 'white';
    archive.style.width = '383px';
    archive.style.height = 'auto';
    archive.style.marginLeft = '10px';
    archive.style.marginBottom = '10px'; 
    if(txt.value === ''){
        alert('Input is empty');
        document.cookie = name + '=' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    }else{
        document.cookie = `${name} = ${txt.value}`;
    }
}


function delCookie(){
    let confirmation = confirm('Are you sure?')
    if (confirmation === true){
    document.cookie = name + '=' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    archive.innerHTML = '[Empty]';
    archive.style.backgroundColor = 'white';
    archive.style.width = '383px';
    archive.style.height = 'auto';
    archive.style.marginLeft = '10px';
    archive.style.marginBottom = '10px'; 
    name = 0;
    }
}


































// archive.innerHTML = '[empty]';
//     archive.style.backgroundColor = 'white';
//     archive.style.width = '383px';
//     archive.style.height = 'auto';
//     archive.style.marginLeft = '10px';
//     archive.style.marginBottom = '10px';    
 
 
 
   
    
    
    




// function add() {

//     var div = d.getElementById("div"), 
//      txt = d.getElementById("txt");
  
//     var newDiv = d.createElement("div");
  
//     newDiv.innerHTML = txt.value;
  
//     div.appendChild(newDiv);
  
//   }
//   <textarea id="txt"></textarea>
  
//   <input type="button" value="Add" onClick="add()">
  
//   <div id="div"></div>
  
  




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

    function setCookies(){
    //localStorage.setItem('test', 111)
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
        //document.cookie = name + '=' + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    }else{
        localStorage.setItem('name', txt.value)
    }
    }

    function delCookie(){
        let confirmation = confirm('Are you sure?');
        if (confirmation === true){
            localStorage.clear();
            
            archive.innerHTML = '[Empty]';
            archive.style.backgroundColor = 'white';
            archive.style.width = '383px';
            archive.style.height = 'auto';
            archive.style.marginLeft = '10px';
            archive.style.marginBottom = '10px'; 
            name = 0;

        }
    }
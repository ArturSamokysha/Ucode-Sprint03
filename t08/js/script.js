let personData = [
    {name: 'Black Panther', strenght: 66, age: 53},
    {name: 'Captain America', strenght: 79, age: 137},
    {name: 'Captain Marvel', strenght: 97, age: 26},
    {name: 'Hulk', strenght: 80, age: 49},
    {name: 'Iron Man', strenght: 88, age: 48},
    {name: 'Spider-Man', strenght: 78, age: 16},
    {name: 'Thanos', strenght: 99, age: 1000},
    {name: 'Thor', strenght: 95, age: 1000},
    {name: 'Yon-Rogg', strenght: 73, age: 52},
    ];
    
    let dataTable = '';
    let main = document.querySelector('main');
    let table = document.createElement;
    
    dataTable = `<table><thead><tr><td id="name">Name</td><td id="strenght">Strength</td><td id="age">Age</td></tr></thead><tbody></tbody>`;
    for(i=0; i < personData.length; i++){
        dataTable += `<tr> <td>${personData[i].name}</td> <td>${personData[i].strenght}</td> <td>${personData[i].age}</td> </tr>`
    }
    main.insertAdjacentHTML('beforeend', dataTable);

    
    let headName = document.querySelector('thead');
    headName.addEventListener('click', sorting);
    let ASC = true;

    function sorting(x){
       let personDataSorted = `<table><thead><tr><td id="name">Name</td><td id="strenght">Strength</td><td id="age">Age</td></tr></thead><tbody></tbody>`;
        
        if(ASC){
        personData = personData.sort((a, b) => {
            if(b[x.target.id] > a[x.target.id]){
                return 1;
            }else if(b[x.target.id] < a[x.target.id]){
                return -1;
            }else{
                return 0;
            }
        });
        ASC = false;
    }else{
        personData = personData.sort((a, b) => {
            if(a[x.target.id] > b[x.target.id]){
                return 1;
            }else if(a[x.target.id] < b[x.target.id]){
                return -1;
            }else{
                return 0;
            }
        });
        ASC = true;
        
    }
    for(i = 0; i < personData.length; i++){
        personDataSorted += `<tr> <td>${personData[i].name}</td> <td>${personData[i].strenght}</td> <td>${personData[i].age}</td> </tr>`;
    }
    let table = document.querySelector("table");
    table.innerHTML = personDataSorted;
    let headName = document.querySelector('thead');
    headName.addEventListener('click', sorting);

    }







// // let sortDirection = true;
// // let personData = [
// // {name: 'Black Panther', strenght: 66, age: 53},
// // {name: 'Captain America', strenght: 79, age: 137},
// // {name: 'Captain Marvel', strenght: 97, age: 26},
// // {name: 'Hulk', strenght: 80, age: 49},
// // {name: 'Iron Man', strenght: 88, age: 48},
// // {name: 'Spider-Man', strenght: 78, age: 16},
// // {name: 'Thanos', strenght: 99, age: 1000},
// // {name: 'Thor', strenght: 95, age: 1000},
// // {name: 'Yon-Rogg', strenght: 73, age: 52},
// // ];

// // window.onload = () => {
// //     loadTableData(personData)
// //     };


// //     function loadTableData(personData){
// //     const tableBody = document.getElementById('tableData');
// //     let dataHtml = '';

// //     for(let person of personData){
// //         dataHtml += `<tr><td>${person.name}</td><td>${person.strenght}</td><td>${person.age}</td></tr>`;
// //     }
// //     // console.log(dataHtml);
// //     tableBody.innerHTML = dataHtml;
// // }







///////////////////////////////////////////////////////////////////////////////////////////////serega
// let tableElement = [
//     {name: "Black Pantera", strength: 66, age: 53},
//     {name: "Captain America", strength: 79, age: 137},
//     {name: "Captain Marvel", strength: 97, age: 26},
//     {name: "Hulk", strength: 5, age: 49},
//     {name: "Iron Man", strength: 88, age: 48},
//     {name: "Spider-Man", strength: 78, age: 16},
//     {name: "Thanos", strength: 99, age: 1000},
//     {name: "Thor", strength: 95, age: 1000},
//     {name: "Yon-Rogg", strength: 73, age: 52}
//   ];
//   ​
//   let headerElement = ['Name', 'Strength', 'Age'];
//   ​
//   ​
//   let count = false;
//   let table = document.createElement('table');
//   table.classList.add('table');
//   document.body.append(table);
//   ​
//   let tablehead=document.createElement('thead');
//   tablehead.classList.add('table-header');
//   table.append(tablehead);
//   ​
//   let tablebody=document.createElement('tbody');
//   tablebody.classList.add('table-body');
//   table.append(tablebody);
//   ​
//   let tr = document.createElement('tr');
//   tablehead.append(tr);
//   ​
//   header_value = document.getElementById('header_value');
//   ​
//   sort_value = document.getElementById('sort_value');
//   ​
//   ​
//   let get=(id)=>{
//     return document.querySelector(id);
//   }
//   ​
//   for (let c = 0; c < headerElement.length; c++) {
//     let th = document.createElement('th');
//     th.insertAdjacentHTML(`beforeend`, `${headerElement[c]}`);
//     th.setAttribute('id',`header${c}`);
//     tr.append(th);
//   }
//   ​
//   let renderCell=()=>{
//     tablebody.innerHTML = '';
//     for (let i = 0; i < tableElement.length; i++) {
//       let tr = document.createElement('tr');
//       tablebody.append(tr);
//       for (let j = 0; j < Object.keys(tableElement[0]).length; j++) {
//         let td = document.createElement('td');
//         td.insertAdjacentHTML(`beforeend`, `${Object.values(tableElement[i])[j]}`);
//         tr.append(td);
//       }
//     }
//   }
//   ​
//   renderCell();
//   ​
//   get('#header0').addEventListener('click',function (event){
//     if(event.target.innerText==='Name'){
//       header_value.innerHTML = '';
//       header_value.insertAdjacentHTML('beforeend', `Name`);
//       if(count === false){
//         tableElement.sort((a, b) => a.name > b.name ? -1 : 1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `ASC`);
//         count = true;
//         renderCell();
//       }else if (count === true){
//         tableElement.sort((a, b) => a.name > b.name ? 1 : -1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `DESC`);
//         count = false;
//         renderCell();
//       }
//     }
//   });
//   get('#header1').addEventListener('click',function (event){
//     if(event.target.innerText==='Strength'){
//       header_value.innerHTML = '';
//       header_value.insertAdjacentHTML('beforeend', `Strength`);
//       if(count === false){
//         tableElement.sort((a, b) => a.strength > b.strength ? -1 : 1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `ASC`);
//         count = true;
//         renderCell();
//       }else if (count === true){
//         tableElement.sort((a, b) => a.strength > b.strength ? 1 : -1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `DESC`);
//         count = false;
//         renderCell();
//       }
//     }
//   });
//   get('#header2').addEventListener('click',function (event){
//     header_value.innerHTML = '';
//     header_value.insertAdjacentHTML('beforeend', `Age`);
//     if(event.target.innerText==='Age'){
//       if(count === false){
//         tableElement.sort((a, b) => a.age > b.age ? -1 : 1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `ASC`);
//         count = true;
//         renderCell();
//       }else if (count === true){
//         tableElement.sort((a, b) => a.age > b.age ? 1 : -1);
//         sort_value.innerHTML = '';
//         sort_value.insertAdjacentHTML('beforeend', `DESC`);
//         count = false;
//         renderCell();
//       }
//     }
//   });
///////////////////////////////////////////////////////////////////////////////////////////////





















// function sortTableByColumn(table, column, asc = true){
//     const dirMod = asc ? 1 : -1;
//     const tBody = table.tBodies[0];
//     const rows = Array.from(tBody.querySelectorAll("tr"));
    
    
//     const sortedRows = rows.sort((a, b) => {
//         const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
//         const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();

//         return aColText > bColText ? (1 * dirMod) : (-1 * dirMod);
//     });
//     while(tBody.firstChild){
//         tBody.removeChild(tBody.firstChild);
//     }
//     tBody.append(...sortedRows)

//     table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
//     table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
//     table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
// }
// //sortTableByColumn(document.querySelector("table"),1, true);


// document.querySelectorAll(".table-sortable th").forEach(headerCell => {
//     headerCell.addEventListener("click", () => {
//         const tableElement = headerCell.parentElement.parentElement.parentElement;
//         const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
//         const currentIsAscending = headerCell.classList.contains("th-sort-asc");

//         sortTableByColumn(tableElement, headerIndex, !currentIsAscending)
//     });
// });

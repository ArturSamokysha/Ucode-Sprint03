const date0 = new Date (1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

const days  =  {  date0 : new Date (1993, 11, 1),
            date1 : new Date(1998, 0, -33),
            date2 : new Date('42 03:24:00'),
}

function getFormattedDate(days){
    let week = ['Sandey','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = days.getDate() < 10 ? '0'+days.getDate() : days.getDate();
    let month = days.getMonth() < 10 ? `0${days.getMonth() + 1}` : `${days.getMonth() + 1}`;
    let hours = days.getHours() < 10 ? '0'+days.getHours() : days.getHours();
    let minutes = days.getMinutes() < 10 ? '0'+days.getMinutes() : days.getMinutes();
    return day + '.' + month + '.' + days.getFullYear() + ' ' + hours + ':' + minutes +' '+ week[days.getDay()];
};
 
console.log(getFormattedDate(date0)); 
console.log(getFormattedDate(date1));
console.log(getFormattedDate(date2));

// 01.12.1993 00:00 Wednesday
// 28.11.1997 00:00 Friday
// 01.01.2042 03:24 Wednesday
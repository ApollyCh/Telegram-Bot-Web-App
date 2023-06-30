let head = document.getElementById('heading')
head.addEventListener('click', function () {
    location.href = './index.html';
})

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let btn1 = document.getElementById('num1')
let btn2 = document.getElementById('num2')

btn1.style.left= `${vw /2 - 12 - 148}px`;
btn2.style.left=`${vw/2 + 12}px`;

btn1.addEventListener('click', function () {
    location.href = './book_the_room.html';
})

btn2.addEventListener('click', function () {
    location.href = './cancel_out.html';
})



let datatime = document.getElementById("datetimepicker");
datatime.style.left = `${vw / 2 - 150}px`;

let duration_only = document.getElementById("durationpicker")
duration_only.style.left = `${vw / 2 - 150}px`;

let generate_rooms = document.getElementById('generate_rooms');
generate_rooms.style.left=`${vw/2 + 12}px`;

let lnum1 = document.getElementById('lnum1');
lnum1.style.left=`${vw/2 - 12 - 200 + 60 + 60 + 10}px`;

let lnum2 = document.getElementById('lnum2') ;
lnum2.style.left=`${vw/2 - 12 - 140 + 7}px`;



lnum1.addEventListener('click', function () {
    lnum1.style.backgroundColor = "#64e644";
    lnum2.style.backgroundColor = "#40BA21";
    datatime.style.visibility = 'hidden';
    duration_only.style.visibility = 'visible';
    
})

lnum2.addEventListener('click', function () {
    lnum2.style.backgroundColor = "#64e644";
    lnum1.style.backgroundColor = "#40BA21";
    datatime.style.visibility = 'visible';
    duration_only.style.visibility = 'hidden';
    
})

let rooms = document.getElementsByClassName("rooms_container");
rooms[0].style.left = `${vw/2 - 164}px`;


// function changeClass(newClass) {
//     el.class = newClass; 
//     updateContent(); 
//   }

let number_of_chosen_rooms = 0;

function chooseColor(id) {
    let b = document.getElementById(id);
    b.addEventListener('click', () => {
        b.style.backgroundColor = '#A1F0AE';
    })
}

// datetime init
let start_by_date = document.getElementById("start2");
let start_by_hour = document.getElementById("start")
let end_by_date = document.getElementById("end");
let hours = document.getElementById("hours")


generate_rooms.addEventListener('click', function () {
    let l301 = document.getElementById('l301');
    l301.style.visibility = 'visible';
    let l303 = document.getElementById('l303');
    l303.style.visibility = 'visible';
    let l304 = document.getElementById('l304');
    l304.style.visibility = 'visible';
    let l312 = document.getElementById('l312');
    l312.style.visibility = 'visible';
    let l314 = document.getElementById('l314');
    l314.style.visibility = 'visible';

    
    let m31 = document.getElementById('m31');
    m31.style.visibility = 'visible';
    let m32 = document.getElementById('m32');
    m32.style.visibility = 'visible';

    console.log(String(start_by_date.value).replace('T', ' ').replace(/-/g, ':'))

}) 

// function checkRoom() {
    
// }

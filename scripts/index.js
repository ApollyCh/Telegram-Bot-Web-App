const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let btn1 = document.getElementById('num1');
let btn2 = document.getElementById('num2');
// let btn3 = document.getElementById('num3');

function btnLeft() {
    btn1.style.left = `${(vw / 2) - 138}px`;
    btn2.style.left = `${(vw / 2) - 138}px`;
    // btn3.style.left = `${(vw / 2) - 138}px`;
}

btnLeft()

btn1.addEventListener('click', function () {
    location.href = './find_free_rooms.html';
})

btn2.addEventListener('click', function () {
    location.href = './book_the_room.html';
})

// btn3.addEventListener('click', function () {
//     location.href = './cancel_out.html';
// })

let head = document.getElementById('heading')
head.addEventListener('click', function () {
    location.href = './index.html';
})

document.getElementById('logo').style.left = `${vw / 2 - 80}px`;

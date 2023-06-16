const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

let btn1 = document.getElementById('num1');
let btn2 = document.getElementById('num2');
let btn3 = document.getElementById('num3');


function btnLeft() {
    btn1.style.left = `${(vw / 2) - 138}px`;
    btn2.style.left = `${(vw / 2) - 138}px`;
    btn3.style.left = `${(vw / 2) - 138}px`;
}

btnLeft()



let rotationX = 0;
let rotationY = 0;
const cube = document.querySelector('.box-area');
const three =document.querySelector('.box-back');



function rotateXAxis(n) {
    rotationX = rotationX + (90 * n);
    console.log(rotationX)
    three.style.trasform=`rotateX(180deg) rotateY(180deg)`
    //cube.style.trasform="rotateX(" +rotationX +"deg) rotateY(0deg)";
    cube.style.trasform = `rotateX(${rotationX} +deg) rotateY(0deg)`;
}

function ratateYAxis(n) {
    rotationY=rotationY+(90*n);
    console.log(rotationY)
    three.style.trasform=`rotateX(0deg) rotateY(0deg)`
    cube.style.trasform = `rotateX(0deg) rotateY(${rotationY}deg)`;
}

function front() {
    cube.style.trasform = `rotateX(0deg) rotateY(0deg)`;
}
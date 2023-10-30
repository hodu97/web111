let acc=document.getElementsByClassName('accordion');

console.log(acc[0])
console.log(acc.length)

/* for(①i=0; ②i<acc.length;④i++){
    ③
} 봐야하는 순서
 */

for(let i=0; i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        console.log(i)
    })
}
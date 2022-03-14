// control scroll way
const container = document.querySelector('.container');
const page = document.querySelector('.page');
const mainPullDown = document.querySelector('.main .main_pull_down');
let num = 0;
container.addEventListener('wheel',(event)=>{
    event.preventDefault();
    num -= event.deltaY;
    if(num >= 0){
        num = 0;
    }
    page.style.top = num + 'px';
    mainPullDown.style.bottom =  20 - num * 0.2 + 'px';
})

// control scroll way,use num to judge position.
let num = 0;

container.addEventListener('wheel',(event)=>{
    event.preventDefault();
    num -= event.deltaY;
    if(num >= 0){
        num = 0;
    }
    page.style.top = num + 'px';
    page2.style.top = num + screenHeight + 'px';
    mainPullDown.style.bottom =  20 - num * 0.2 + 'px';
})

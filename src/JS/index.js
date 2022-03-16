// Control scroll way,use num to judge position.
let num = 0;

container.addEventListener('wheel',(event)=>{
    event.preventDefault();
    num -= event.deltaY;
    // Control the container doesn't exceed the screen.
    if(num >= 0){
        num = 0;
    }
    // Use style.top to control these position.
    page.style.top = num + 'px';
    page2.style.top = num + screenHeight + 'px';
    mainPullDown.style.bottom =  20 - num * 0.2 + 'px';
})

// Control scroll way,use num to judge position.
let num = 0;

/* 
* @function set the marginleft to the box
* @param index {number} the index of box
* @param position {number} the position will changed
* @return void
*/
function setMarginLeft(index,position){
    articleCard[index].style.marginLeft = position + 'px';
}

/* 
* @function set the page position with num
* @return void
*/
function controlScreen (){
    page.style.top = num + 'px';
    page2.style.top = num + screenHeight + 'px';
    mainPullDown.style.bottom =  20 - num * 0.2 + 'px';
    if(num < -screenHeight + 450){
        setMarginLeft(0,300)
        individualLabel.style.top = 300 +'px'
    }
    if(num < -screenHeight + 300){
        setMarginLeft(0,150)
        setMarginLeft(1,300)
        individualLabel.style.top = 150 +'px'
    }
    if(num < -screenHeight + 150){
        setMarginLeft(0,0)
        setMarginLeft(1,150)
        setMarginLeft(2,300)
        individualLabel.style.top = 0 +'px'
    }
    if(num < -screenHeight + 0){
        setMarginLeft(1,0)
        setMarginLeft(2,150)
        setMarginLeft(3,300)
    }
    if(num < -screenHeight - 150){
        setMarginLeft(2,0)
        setMarginLeft(3,150)
        setMarginLeft(4,300)
    }
    if(num < -screenHeight - 300){
        setMarginLeft(3,0)
        setMarginLeft(4,150)
    } 
    if(num < -screenHeight - 450){
        setMarginLeft(4,0)
    } 
} 

container.addEventListener('wheel',(event)=>{
    event.preventDefault();
    num -= event.deltaY;
    // Control the container doesn't exceed the screen.
    if(num >= 0){
        num = 0;
    }
    if(num <= 0 && num >= -screenHeight - 1000){
    // Use style.top to control these position.
        controlScreen();
    }else if(num <= -screenHeight * 2){
        num = -screenHeight * 2
    }
})

mainPullDown.addEventListener('click',function(){
    num = -screenHeight;
    controlScreen();
})



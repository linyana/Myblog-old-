// control scroll way
const container = document.querySelector('.container');
const main_pull_down = document.querySelector('.main .main_pull_down');
const page = document.querySelector('.page');
let num = 0;
container.addEventListener('wheel',(event)=>{
    event.preventDefault();
    num -= event.deltaY;
    if(num >= 0){
        num = 0;
    }
    container.style.top = num + 'px';
})

// control main's layout from your screen

function ScreenSize(box){
    box.style.width = screenWidth + 'px';
    box.style.height = screenHeight + 'px';
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height - 120;

const main = document.querySelector('.main');
const main_name = document.querySelector('.main .main_name');
const main_motto1 = document.querySelector('.main .main_motto1');
const main_motto2 = document.querySelector('.main .main_motto2');
const main_motto3 = document.querySelector('.main .main_motto3');


// motto's width and height
ScreenSize(main)
main_name.style.right = screenWidth * 0.12 + 'px';
main_motto1.style.right = screenWidth * 0.18 + 'px';
main_motto2.style.right = screenWidth * 0.15 + 'px';
main_motto3.style.right = screenWidth * 0.15 + 'px';
main_name.style.top = screenHeight * 0.20 + 'px';
main_motto1.style.top = screenHeight * 0.34 + 'px';
main_motto2.style.top = screenHeight * 0.39 + 'px';
main_motto3.style.top = screenHeight * 0.54 + 'px';

// content's width
const content = document.querySelector('.content')
ScreenSize(content)
// control main's layout from your screen

const ScreenSize = function (box){
    box.style.width = screenWidth + 'px';
    box.style.height = screenHeight + 'px';
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height - 120;

ScreenSize(container);


const main = document.querySelector('.main');
const mainName = document.querySelector('.main .main_name');
const mainMotto1 = document.querySelector('.main .main_motto1');
const mainMotto2 = document.querySelector('.main .main_motto2');
const mainMotto3 = document.querySelector('.main .main_motto3');


// motto's width and height
ScreenSize(main)
mainName.style.right = screenWidth * 0.12 + 'px';
mainMotto1.style.right = screenWidth * 0.18 + 'px';
mainMotto2.style.right = screenWidth * 0.15 + 'px';
mainMotto3.style.right = screenWidth * 0.15 + 'px';
mainName.style.top = screenHeight * 0.20 + 'px';
mainMotto1.style.top = screenHeight * 0.34 + 'px';
mainMotto2.style.top = screenHeight * 0.39 + 'px';
mainMotto3.style.top = screenHeight * 0.54 + 'px';

// control main's layout from your screen
const main = document.querySelector('.main');
const main_name = document.querySelector('.main .main_name');
const main_motto1 = document.querySelector('.main .main_motto1');
const main_motto2 = document.querySelector('.main .main_motto2');
const main_motto3 = document.querySelector('.main .main_motto3');

// width
const screenWidth = window.screen.width;
main.style.width = screenWidth + 'px';
main_name.style.right = screenWidth * 0.12 + 'px';
main_motto1.style.right = screenWidth * 0.18 + 'px';
main_motto2.style.right = screenWidth * 0.15 + 'px';
main_motto3.style.right = screenWidth * 0.15 + 'px';

// height
const screenHeight = window.screen.height - 120;
main.style.height = screenHeight + 'px';
main_name.style.top = screenHeight * 0.20 + 'px';
main_motto1.style.top = screenHeight * 0.35 + 'px';
main_motto2.style.top = screenHeight * 0.40 + 'px';
main_motto3.style.top = screenHeight * 0.55 + 'px';


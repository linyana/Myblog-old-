// get user screen size.
const screenWidth = window.screen.width;
const screenHeight = window.screen.height - 120;

// control main's layout from your screen.
container.style.width = screenWidth + 'px';
container.style.height = screenHeight + 500 + 'px';
main.style.width = screenWidth + 'px';
main.style.height = screenHeight + 'px';

// motto/page's position.
function setPosition(box,rightTimes,topTimes){
    box.style.right = screenWidth * rightTimes + 'px';
    box.style.top = screenHeight * topTimes + 'px';
}

setPosition(mainName,0.12,0.20);
setPosition(mainMotto1,0.18,0.34);
setPosition(mainMotto2,0.15,0.39);
setPosition(mainMotto3,0.15,0.54);

// content/page2's position.
page2.style.top = screenHeight + 'px';
content.style.width = screenWidth + 'px';
contentLeft.style.width = screenWidth * 0.25 + 'px';
contentLeft.style.height = 1200 + 'px';



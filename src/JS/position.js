// Get user screen size.
const screenWidth = window.screen.width;
const screenHeight = window.screen.height - 120;

// Control main's layout from your screen.
container.style.width = screenWidth + 'px';
container.style.height = screenHeight + 500 + 'px';
main.style.width = screenWidth + 'px';
main.style.height = screenHeight + 'px';

/* 
* @function set the page position with screen
* @param box {HTMLElement} the box which need to be located
* @param rightTimes {number} set style.right
* @param topTimes {number} set style.top
* @return void
*/
function setPosition(box,rightTimes,topTimes){
    box.style.right = screenWidth * rightTimes + 'px';
    box.style.top = screenHeight * topTimes + 'px';
}

// page/motto's position.
setPosition(mainName,0.12,0.20);
setPosition(mainMotto1,0.18,0.34);
setPosition(mainMotto2,0.15,0.39);
setPosition(mainMotto3,0.15,0.54);

// page2/content's position.
page2.style.top = screenHeight + 'px';
content.style.marginLeft = (screenWidth - 1400) / 2 + 'px';
contentLeft.style.width = 384 + 'px';
contentLeft.style.height = 800 + 'px';



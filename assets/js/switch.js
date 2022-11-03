'use strict';

const switchButton = document.querySelector('.switch-button'),
	switchBtnRight = document.querySelector('.switch-button-case.right'),
	switchBtnLeft = document.querySelector('.switch-button-case.left'),
	activeSwitch = document.querySelector('.active');

/**
 * When the switchLeft function is called, the switchBtnRight class is removed from the switchBtnRight
 * element, the switchBtnLeft class is added to the switchBtnLeft element, the left property of the
 * activeSwitch element is set to 0%, and the borderRadius property of the activeSwitch element is set
 * to 20px 0px 0px 20px.
 */
function switchLeft() {
	switchBtnRight.classList.remove('active-case');
	switchBtnLeft.classList.add('active-case');
	activeSwitch.style.left = '0%';
	activeSwitch.style.borderRadius = '20px 0px 0px 20px';
}

/**
 * When the switchRight function is called, the switchBtnRight class is added to the switchBtnRight
 * element, the switchBtnLeft class is removed from the switchBtnLeft element, the left property of the
 * activeSwitch element is set to 50%, and the borderRadius property of the activeSwitch element is set
 * to 0px 20px 20px 0px
 */
function switchRight() {
	switchBtnRight.classList.add('active-case');
	switchBtnLeft.classList.remove('active-case');
	activeSwitch.style.left = '50%';
	activeSwitch.style.borderRadius = '0px 20px 20px 0px';
}

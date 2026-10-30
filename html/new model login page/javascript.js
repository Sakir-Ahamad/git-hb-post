const lampContainer = document.querySelector('.lamp-container');
const lampBulb = document.getElementById('lampBulb');
const roomLight = document.getElementById('roomLight');

let isOn = true;

lampContainer.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
        lampBulb.style.background = '#ffcc00';
        lampBulb.style.boxShadow = '0 0 30px #ffcc00, 0 0 60px #ffcc00';
        roomLight.style.opacity = '1';
    } else {
        lampBulb.style.background = '#444';
        lampBulb.style.boxShadow = 'none';
        roomLight.style.opacity = '0';
    }
});
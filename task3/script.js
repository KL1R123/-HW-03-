const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen()  {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl3.style.background = ('black');
}

trafficLightEl.addEventListener('click', makeGreen);





function makeYellow()  {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl.style.background = ('black');
}

trafficLightEl2.addEventListener('click', makeYellow);

function makeRed()  {
    trafficLightEl3.style.background = ('red');
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeGreen);
    trafficLightEl2.style.background = ('black');
}

trafficLightEl3.addEventListener('click', makeRed);






















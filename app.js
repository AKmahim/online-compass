window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  var alpha = event.alpha; // The compass direction in degrees
  var compass = document.querySelector('.compass');
  var needle = document.querySelector('.needle');

  compass.style.transform = 'rotate(' + alpha + 'deg)';
  needle.style.transform = 'rotate(' + -alpha + 'deg)';

  var direction = getDirection(alpha);
  console.log('Current direction:', direction);
}

function getDirection(alpha) {
  var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  var index = Math.round(alpha / 45) % 8;
  return directions[index];
}

window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
  var alpha = event.alpha; // The compass direction in degrees
  var compass = document.querySelector('.compass');
  var needle = document.querySelector('.needle');
  
  compass.style.transform = 'rotate(' + alpha + 'deg)';
  needle.style.transform = 'rotate(' + -alpha + 'deg)';
}
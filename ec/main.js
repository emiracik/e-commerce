var countDownDate = new Date("Mar 3, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  
  document.getElementById('day').innerHTML =days < 10 ? "0" + days: days;
  document.getElementById('hour').innerHTML = hours < 10 ? "0" + hours: hours;
  document.getElementById('minutes').innerHTML = minutes < 10 ? "0" + minutes: minutes;
  document.getElementById('second').innerHTML = seconds < 10 ? "0" + seconds: seconds;

  // If the count down is finished, write some text
}, 1000);


$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
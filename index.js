/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  timeInt = parseInt(time);
  if(time < 12){
    return "Good Morning";
  } 
  if(time > 12 && time < 5){
    return "Good Afternoon";
  }
  if(time > 5){
    return "Good Evening";
  }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  const greetings = document.getElementById('greeting')
  greeting.value = message;
}


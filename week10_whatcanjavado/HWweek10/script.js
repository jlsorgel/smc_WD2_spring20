var showSSImg = document.getElementById("springImg");

var switchSSButton = document.getElementById("springSummerButton");



var showFWImg = document.getElementById("fallImg");

var switchFWButton = document.getElementById("fallWinterButton");
// var swapFallWinter = function () {
//   console.log(switchFWButton);

//   if (switchFWButton.innerText == "Show Winter") {
//     showFWImg.src = "winter.jpg";
//     showFWImg.alt = "Winter Image";
//     switchFWButton.innerText = "Show Fall";
//   }
// }


var swapFallWinter = function () {
  console.log(showFWImg.alt);

  if (showFWImg.alt == "fall") {
    showFWImg.src = "winter.jpg";
    showFWImg.alt = "winter";
    switchFWButton.innerText = "Show Fall";
    switchFWButton.style.backgroundColor = "rgb(235, 148, 35)";
  }
  else {
    showFWImg.src = "fall.jpg";
    showFWImg.alt = "fall";
    switchFWButton.innerText = "Show Winter";
    switchFWButton.style.backgroundColor = "#A5F2F3";
  }
}



var swapSpringSummer = function () {
  if (switchSSButton.innerText == "Show Summer") {
    showSSImg.src = "summer.jpg";
    showSSImg.alt = "summer";
    switchSSButton.innerText = "Show Spring";

  }

  else {
    switchSSButton.innerText == "Show Spring";
    showSSImg.src = "spring.jpg";
    showSSImg.alt = "spring";
    switchSSButton.innerText = "Show Summer"

  }
}







switchFWButton.addEventListener("click", swapFallWinter);



switchSSButton.addEventListener("click", swapSpringSummer);
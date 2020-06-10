// INDEX SCRIPT !!!!



// $("#openNav").click(function () {

//   $("#side_nav").css({ "background-color": "blue" });

// });




document.getElementById("openNav").onclick = function () { openNav() };


function openNav() {
  document.getElementById("side_nav").style.width = "100%";
}


function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}





// ABOUT SCRIPT !!!!
$(document).ready(function () {

  $('#btn1').click(function () {
    $('p.para1').toggle('myClass');

  });















});
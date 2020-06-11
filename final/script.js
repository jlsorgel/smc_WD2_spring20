


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

$(document).ready(function () {


  // ABOUT SCRIPT !!!!




  $('#btn1').click(function () {
    $('p.para1').toggle('myClass');
  });




  // $('.grid-tem').hover(function () {
  //   $('.hoverdiv h2').mouseover('slow');
  // }, function () {
  //   $('.hoverdiv h2').mouseout('slow');
  // });

  $(".grid-item1").mouseenter(function () {
    $(".hoverdiv").show();
  });
  $(".grid-item1").mouseleave(function () {
    $(".hoverdiv").hide();
  });


  // BLOG SCRIPT !!!!


  //Toggle 


  $('#toggle1').click(function () {
    $('.content1').slidetoggle('slow');

  });








});



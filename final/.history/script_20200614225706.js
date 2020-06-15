



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


  // BLOG SCRIPT BLOG SCRIPT BLOG SCRIPT!!!!




  //Toggle 

  $('.toggle-content').hide();
  $('#toggle1').click(function () {
    $('.toggle-content').slideToggle('slow');
    if ($(this).text() == "Collapse") {
      $(this).text("View More").css("background-color", "green");
    } else {
      $(this).text("Collapse");
    }
  });








  $('.toggle-content2').hide();
  $('#toggle2').click(function () {
    $('.toggle-content2').slideToggle('slow');

  });


  $('.toggle-content3').hide();
  $('#toggle3').click(function () {
    $('.toggle-content3').slideToggle('slow');

  });






  // donate SCRIPT!!!!


  $('form').submit(function (event) {
    event.preventDefault();
  });





  $('#donatemessage').hide();
  $('#submitbtn').on('click', function (e) {
    e.preventDefault();
    $('.donate-form').hide();
    $('#donatemessage').show().dialog();
  });








});




document.getElementById("openNav").onclick = function () { openNav() };


function openNav() {
  document.getElementById("side_nav").style.width = "100%";
}


function closeNav() {
  document.getElementById("side_nav").style.width = "0";
}

$(document).ready(function () {

  // $(".btn").click(function () {
  //   $(this).effect("highlight", {
  //     color: "#28602f"
  //   }, 3000);
  // });


  // ABOUT SCRIPT !!!!




  $('#btn1').click(function () {
    $('p.para1').toggle('myClass');
  });






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
      $(this).text("View More").css({ "background-color": "white", "color": "#28602f", "border": "1px solid #28602f", });
    } else {
      $(this).text("Collapse").css({ "background-color": "#28602f", "color": "white" });
    }
  });




  $('.toggle-content2').hide();
  $('#toggle2').click(function () {
    $('.toggle-content2').slideToggle('slow');
    if ($(this).text() == "Collapse") {
      $(this).text("View More").css({ "background-color": "white", "color": "#28602f", "border": "1px solid #28602f", });
    } else {
      $(this).text("Collapse").css({ "background-color": "#28602f", "color": "white" });
    }

  });


  $('.toggle-content3').hide();
  $('#toggle3').click(function () {
    $('.toggle-content3').slideToggle('slow');
    if ($(this).text() == "Collapse") {
      $(this).text("View More").css({ "background-color": "white", "color": "#28602f", "border": "1px solid #28602f", });
    } else {
      $(this).text("Collapse").css({ "background-color": "#28602f", "color": "white" });
    }

  });






  // donate SCRIPT!!!!


  // $('form').submit(function (event) {
  //   event.preventDefault();
  // });





  $('#replacecontent').hide();
  $('#submitbtn').on('click', function (e) {
    e.preventDefault();
    $('#row').hide();
    $('#replacecontent').show().dialog();
  });







});
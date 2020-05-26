// $("#removePinkBtn").click(function () {
//   $('.pink').fadeToggle(2000);
// });


$("#addBothBtn").click(function () {
  $('.both').fadeToggle(2000);
});


$("#pinkOnlyBtn").click(function () {
  $('.blue').fadeToggle(2000);
  $('.pink').append
    (`<img src="images/pinkleaf.jpg" alt="pink coffee" class="pink" width="300px" height="450px">,<img src="images/pinkstairs.jpg" alt="pink coffee" class="pink" width="300px" height="450px">
`);
});



$("#blueOnlyBtn").click(function () {
  $('.pink').replaceWith
    (`<img src="images/blueocran.jpg" width="300px" height="450px">,
    
    <img src="images/blueopen.jpg" width="300px" height="450px">
`);
});


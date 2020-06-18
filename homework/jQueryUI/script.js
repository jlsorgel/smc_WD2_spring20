// Autocomplete
$(function () {
  var availableTags = [
    "Amsterdam",
    "Athens",
    "Beijing",
    "Berlin",
    "Budapest",
    "Copenhagen",
    "Dublin",
    "Hong Kong",
    "Lima",
    "Lisbon",
    "	Madrid",
    "Munich",
    "Nice",
    "Paris",
    "Petra",
    "Seoul",
    "Tokyo",
    "	Singapore",
    "Vancouver",
  ];

  $("#cities").autocomplete({
    source: availableTags
  });
});

// accordion 
$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true
  });
});
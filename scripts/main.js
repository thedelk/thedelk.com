$(document).ready(function() {
  let button = $(".button");
  let panelLeft = $(".nav");

  button.click(function() {
    panelLeft.toggleClass("closed");
  });
});

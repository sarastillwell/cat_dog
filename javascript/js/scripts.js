$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul").prepend("<li>Bark!</li>");
  });

  $("button#bark").click(function() {
    $("ul").prepend("<li>Meow!</li>");
  });

});

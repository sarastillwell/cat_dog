$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#red").prepend("<li>Bark!</li>");

    $("ul#red").children("li").first().click(function() {
      $(this).remove();
  });
  });

  $("button#bark").click(function() {
    $("ul#blue").prepend("<li>Meow!</li>");

  });

});

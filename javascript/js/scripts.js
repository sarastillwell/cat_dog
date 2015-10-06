$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#red").prepend("<li>Bark! <img src='img/dog.jpeg'></li>");

    $("ul#red").children("li").first().click(function() {
      $(this).remove();
  });

  });

  $("button#bark").click(function() {
    $("ul#blue").prepend("<li>Meow! <img src='img/cat.jpeg'></li>");

    $("ul#blue").children("li").first().click(function() {
      $(this).remove();
    });

  });

});

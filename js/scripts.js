$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>I can't meow, I'm a dog</li>");

    $("ul#cat").children("li").first().click(function() {
      $("#catPhoto").show();
    });

    $("ul#dog").children("li").first().click(function() {
      $("#dogPhoto").show();
    });
  });

  $("button#dog").click(function() {
    $("ul#cat").prepend("<li>I can't bark, I'm a cat!</li>");
    $("ul#dog").prepend("<li>BARK!</li>");

    $("ul#cat").children("li").first().click(function() {
      $("#catPhoto").show();
    });

    $("ul#dog").children("li").first().click(function() {
      $("#dogPhoto").show();
    });
  });

});

$(function () {
  $(".question").click(function () {
    $(this).next(".answer").slideToggle();
  });

  $(".question").hover(
    function () { $(this).css("color", "blue"); },
    function () { $(this).css("color", "black"); }
  );

  $(".question").dblclick(function () {
    $(".answer").slideUp();
  });
});

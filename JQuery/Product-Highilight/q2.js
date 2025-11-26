$(function () {

  $(".product").click(function () {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $(".product").hover(
    function () { $(this).find(".details").slideDown(); },
    function () { $(this).find(".details").slideUp(); }
  );

  $(".fav").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥" : "♡");
  });

  $(".product").dblclick(function () {
    if ($(this).data("stock") === 0) {
      alert("Product is OUT OF STOCK!");
    }
  });

});

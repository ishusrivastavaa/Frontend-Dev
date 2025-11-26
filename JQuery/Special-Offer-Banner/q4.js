$(function () {
  $("#hideBtn").click(() => $(".banner").hide());
  $("#showBtn").click(() => $(".banner").show());

  $("#slideUpBtn").click(() => $(".banner").slideUp());
  $("#slideDownBtn").click(() => $(".banner").slideDown());

  $("#fadeOutBtn").click(() => $(".banner").fadeOut());
  $("#fadeInBtn").click(() => $(".banner").fadeIn());

  // Auto-rotate every 5 seconds
  let i = 0;
  const banners = $(".banner");

  banners.hide().eq(0).show();

  setInterval(function () {
    banners.eq(i).fadeOut(500, function () {
      i = (i + 1) % banners.length;
      banners.eq(i).fadeIn(500);
    });
  }, 5000);
});

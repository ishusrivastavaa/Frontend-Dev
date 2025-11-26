$(function () {

  $(".manager").click(function () {
    let id = $(this).data("id");
    $(".member").removeClass("highlight");
    $(`[data-manager='${id}']`).addClass("highlight");
  });

  $(".member").each(function () {
    $(this).after(`<div class='contact'>Email: ${$(this).text().split(" ")[0]}@team.com</div>`);
  });

  $(".member").hover(
    function () { $(this).next(".contact").slideDown(); },
    function () { $(this).next(".contact").slideUp(); }
  );

  $(".deptTitle").click(function () {
    $(this).parent().find(".member").css("background", "#e3f6ff");
  });

  $("#randomBtn").click(function () {
    let all = $(".member");
    let random = all.eq(Math.floor(Math.random() * all.length));

    $(".member").removeClass("highlight");
    random.addClass("highlight");
    random.siblings(".member").addClass("highlight");
  });

  let collapsed = false;
  $("#collapseBtn").click(function () {
    if (!collapsed) $(".member").slideUp();
    else $(".member").slideDown();

    collapsed = !collapsed;
  });

});

$(function () {

  $("#addPostBtn").click(function () {
    let title = $("#titleInput").val() || "Untitled Post";
    $("#postList").append(`<div class="post">${title}</div>`);
    $("#titleInput").val("");
  });

  $("#prependBtn").click(function () {
    $("#postList").prepend(`<div class="post featured">⭐ Featured Post</div>`);
  });

  $("#removeLastBtn").click(function () {
    $("#postList .post").last().remove();
  });

  $("#postList").on("dblclick", ".post", function () {
    $(this).after(`<div class="tag">Tag: New</div>`);
  });

  $("#keyword").keyup(function () {
    let key = $(this).val().toLowerCase();
    $(".post").each(function () {
      let text = $(this).text().toLowerCase();
      $(this).css("background", text.includes(key) ? "yellow" : "");
    });
  });

});

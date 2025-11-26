$(function () {

  function showMsg(text) {
    $("#msg").text(text);
  }

  $("#topics").on("click", ".sub", function () {
    $(this).closest(".topic").addClass("subscribed");
    showMsg("Subscribed successfully!");
  });

  $("#topics").on("click", ".unsub", function () {
    $(this).closest(".topic").removeClass("subscribed");
    showMsg("Unsubscribed!");
  });

  $("#addTopic").click(function () {
    let name = $("#newTopic").val();
    if (!name) return;

    $("#topics").append(`
      <div class="topic">${name}
      <button class="sub">Subscribe</button>
      <button class="unsub">Unsubscribe</button></div>
    `);

    $("#newTopic").val("");
    showMsg("New topic added!");
  });

});

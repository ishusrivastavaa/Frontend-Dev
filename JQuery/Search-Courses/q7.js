$(function () {

  const courses = $(".course");

  $("#search").keyup(function () {
    let q = $(this).val().toLowerCase();
    let count = 0;

    courses.each(function () {
      let text = $(this).text().toLowerCase();

      if (text.includes(q)) {
        $(this).show().addClass("match");
        count++;
      } else {
        $(this).hide().removeClass("match");
      }
    });

    $("#count").text(count);
  });

  $("#clearBtn").click(function () {
    $("#search").val("");
    courses.show().removeClass("match");
    $("#count").text(courses.length);
  });

  $("#count").text(courses.length);
});

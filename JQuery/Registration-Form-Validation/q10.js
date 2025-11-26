$(function () {

  const usedEmails = ["test@mail.com", "user@mail.com"];

  function isValidEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  $("#regForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let pass = $("#password").val().trim();
    let valid = true;

    $("input").removeClass("error");
    $("#result").html("");

    if (!name) {
      $("#name").addClass("error");
      valid = false;
    }

    if (!isValidEmail(email) || usedEmails.includes(email)) {
      $("#email").addClass("error");
      valid = false;
    }

    if (pass.length < 8) {
      $("#password").addClass("error");
      valid = false;
    }

    if (valid) {
      $("#result").html(`<div class='success-message'>Registration Successful!</div>`);
    } else {
      $("#result").html(`<div class='error-message'>Please fix the highlighted fields.</div>`);
    }
  });

});

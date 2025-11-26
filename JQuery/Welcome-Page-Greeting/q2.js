$(document).ready(function () {
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  }

  $("#greetingText").text(getGreeting());

  $("#changeGreeting").click(function () {
    $("#greetingText").text("Stay positive, work hard, make it happen!");
  });

  $("#toggleWelcome").click(function () {
    $("#welcomeMsg").toggle();
  });

  $("#greetingText").click(function () {
    alert("Greeting clicked!");
  });
});

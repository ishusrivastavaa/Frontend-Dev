// q4_theme_switcher.js
// Uses setAttribute + data-theme attribute to apply themes

const themeButtons = document.querySelectorAll("[data-theme-btn]");
const htmlElement = document.documentElement; // <html>
const bodyElement = document.body;

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const themeName = button.getAttribute("data-theme-btn");

    // Save current theme in data-theme on <html>
    htmlElement.setAttribute("data-theme", themeName);

    // Apply body class via setAttribute
    const themeClass = `${themeName}-theme`; // light-theme, dark-theme, blue-theme
    bodyElement.setAttribute("class", themeClass);
  });
});

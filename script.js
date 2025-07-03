const toggleBtn = document.getElementById("toggleTheme");
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  document.documentElement.style.setProperty(
    "--bg-color",
    darkMode ? "#121212" : "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    darkMode ? "#f1f1f1" : "#000000"
  );
});

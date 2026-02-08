console.log("Website Rizki aktif");

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

/* =========================
   1. APPLY THEME SAAT LOAD
   ========================= */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleButton.textContent = "☀️ Light Mode";
} else {
  toggleButton.textContent = "🌙 Dark Mode";
}

/* =========================
   2. TOGGLE + SIMPAN THEME
   ========================= */
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleButton.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

/* =========================
   3. NAVIGATION LOG (AMAN)
   ========================= */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Navigasi ke:", link.getAttribute("href"));
  });
});

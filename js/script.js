const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// cek status saat halaman dibuka
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// tombol diklik
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // simpan status
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

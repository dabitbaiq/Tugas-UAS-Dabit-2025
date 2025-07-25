// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Show scrool btn when scroll down
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});

//Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
}

function aksiKlik() {
  alert("Tombol ditekan!");
}

function cekEnter(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // untuk mencegah scroll saat tekan spasi
    aksiKlik();
  }
}
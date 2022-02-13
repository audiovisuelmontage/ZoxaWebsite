const pages = document.querySelector(".pages");
const loader = document.querySelector("#loader");
const toggleOpen = document.querySelector(".djdhgdkeue");
const toggleIconClose = document.querySelector(".siderbar__menu");
const toggleIconOpen = document.querySelector(".siderbar__menu2");

var loadingAff;

function LoaderTimes() {
    loadingAff = setTimeout(AffichePages, 1200);
}

function AffichePages() {
    document.getElementById("pages").style.display = "none";
    document.getElementById("loader").style.display = "none";
}


function FunctionClose() {
  document.querySelector(".siderbar__menu").style.display = "none";
}

toggleIconClose.addEventListener("click", () => {
  toggleOpen.classList.toggle("activate");
  toggleIconClose.classList.toggle("activate");
  toggleIconOpen.classList.toggle("activate");
})

toggleIconOpen.addEventListener("click", () => {
  toggleOpen.classList.toggle("activate");
  toggleIconClose.classList.toggle("activate");
  toggleIconOpen.classList.toggle("activate");

})

// fonction écriture automatique 

const typed = new Typed(".auto-input", {
  strings: ["Il y a eu une erreur :/", "Erreur !"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
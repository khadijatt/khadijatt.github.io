
document.querySelector(".navbar a[href*=home]").classList.add("active");
window.addEventListener("scroll", navHighlighter);

const sections = document.querySelectorAll("section[id]");

function navHighlighter() {

  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 400;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



var modal = document.getElementById("myModal");
var btn = document.getElementById("project1btn");
var span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const btnGoUp = document.querySelector(".btn-go-up")

btnGoUp.addEventListener("click", function () { 
  window.scroll(0, 0)
})

function setBtnGoUpVisibility() {
  btnGoUp.style.display = window.scrollY > 100 ? "flex" : "none"
  /*
  if (window.scrollY > 100) {
    btnGoUp.style.display = "flex"
  } else {
    btnGoUp.style.display = "none"
   }
   */
}
window.addEventListener("scroll", setBtnGoUpVisibility)
setBtnGoUpVisibility()
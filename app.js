const btnGoUp = document.querySelector(".btn-go-up")

btnGoUp.addEventListener("click", function () { 
  window.scroll(0, 0)
})

window.addEventListener("scroll", function () { 
  btnGoUp.style.display = window.scrollY > 100 ? "flex" : "none"
  /*
  if (window.scrollY > 100) {
    btnGoUp.style.display = "flex"
  } else {
    btnGoUp.style.display = "none"
   }
   */
})

btnGoUp.style.display = "none"
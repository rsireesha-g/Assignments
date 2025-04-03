var allFaqs = document.getElementsByClassName("faq-question");
var allSymbols = document.getElementsByClassName("faq-symbol");
var allAns = document.getElementsByClassName("faq-answer");
for (let i = 0; i < allFaqs.length; i++) {
    allFaqs[i].addEventListener("click", function () {
        allSymbols[i].classList.toggle("active");
        if (allAns[i].style.display === "block") {
            allAns[i].style.display = "none";
            allSymbols[i].src = './assets/svg/plus.svg'
        } else {
            allAns[i].style.display = "block";
            allSymbols[i].src = './assets/svg/minus.png'
        }
    })
}
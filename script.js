const btn1 = document.querySelector("#btn1");

const btn2 = document.querySelector("#btn2");

const btn3 = document.querySelector("#btn3");

const btn4 = document.querySelector("#btn4");

const btn5 = document.querySelector("#btn5");

const btn6 = document.querySelector("#btn6");

const btn7 = document.querySelector("#btn7");

const educ = document.querySelector(".educ");

const logo = document.querySelector("#logo");
 
const logo2 = document.querySelector("#logo2")

logo.addEventListener("click", () => {
    educ.style.display = "block";
})

logo2.addEventListener("click" , () => {
    educ.style.display = "block";
})

btn7.addEventListener("click", () => {
    educ.style.display = "none";
})

btn6.addEventListener("click", () => {
    educ.style.display = "none";
})

btn5.addEventListener("click", () => {
    educ.style.display = "none";
})

btn4.addEventListener("click", () => {
    educ.style.display = "none";
})

btn3.addEventListener("click", () => {
    educ.style.display = "none";
})

btn2.addEventListener("click", () => {
    educ.style.display = "none";
})

btn1.addEventListener("click", () => {
    educ.style.display = "none";
})

const btn1 = document.querySelector("#btn1");

const btn2 = document.querySelector("#btn2");

const btn3 = document.querySelector("#btn3");

const btn4 = document.querySelector("#btn4");

const btn5 = document.querySelector("#btn5");

const btn6 = document.querySelector("#btn6");

const btn7 = document.querySelector("#btn7");

const educ = document.querySelector(".educ");
const educ2 = document.querySelector(".educ2");
const educ3 = document.querySelector(".educ3");
const educ4 = document.querySelector(".educ4");
const educ5 = document.querySelector(".educ5");
const educ6 = document.querySelector(".educ6");
const educ7 = document.querySelector(".educ7");

const logo = document.querySelector("#logo");
 
const logo2 = document.querySelector("#logo2")

logo.addEventListener("click", () => {
    educ.style.display = "block";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

logo2.addEventListener("click" , () => {
    educ.style.display = "block";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

btn7.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "flex";
})

btn6.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "flex";
    educ7.style.display = "none";
})

btn5.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "flex";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

btn4.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "flex";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

btn3.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "none";
    educ3.style.display = "flex";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

btn2.addEventListener("click", () => {
    educ.style.display = "none";
    educ2.style.display = "flex";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

btn1.addEventListener("click", () => {
    educ.style.display = "flex";
    educ2.style.display = "none";
    educ3.style.display = "none";
    educ4.style.display = "none";
    educ5.style.display = "none";
    educ6.style.display = "none";
    educ7.style.display = "none";
})

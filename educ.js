const btnp = document.querySelector("#btnp");
const btnpn = document.querySelector("#btnpn");
const btnig = document.querySelector("#btnig");
const btnf = document.querySelector("#btnf");
const btnsit = document.querySelector("#btnsit");
const btnsb = document.querySelector("#btnsb");
const btnc = document.querySelector("#btnc");

if(performance.navigation.type != performance.navigation.TYPE_RELOAD) {
    localStorage.btn = 0;
}

btnc.addEventListener("click", () => {
    localStorage.btn = '7';
})

btnsb.addEventListener("click", () => {
    localStorage.btn = '6';
})

btnf.addEventListener("click", () => {
    localStorage.btn = '5';
})

btnig.addEventListener("click", () => {
    localStorage.btn = '4';
})

btnpn.addEventListener("click", () => {
    localStorage.btn = '3';
})

btnp.addEventListener("click", () => {
    localStorage.btn = '2';
})

btnsit.addEventListener("click", () => {
    localStorage.btn = '1';
})

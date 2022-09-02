const button1 = document.getElementById("button1");
function showtext1() {
    const inputvalue = document.getElementById("inputi1").value;
    const result = document.getElementById("result");

result.innerHTML = inputvalue 
}
button1.addEventListener("click", showtext1)
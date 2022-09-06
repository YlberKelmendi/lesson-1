// function showtext1() {
//     const inputvalue = document.getElementById("inputi1").value;
//     const result = document.getElementById("result");

// result.innerHTML = "result: " + inputvalue
// };
// button1.addEventListener("click", showtext1);

// const button2 = document.getElementById("button2");
// function showtext2() {
//     const inputvalue = document.getElementById("inputi2").value;
//     const result = document.getElementById("result2");
//     result.innerHTML = "result2 " + inputvalue

// }
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");


function showtext(inputId, textId) {
  const inputvalue = document.getElementById(inputId).value;
  const result = document.getElementById(textId);
  result.innerHTML = "result1: " + inputvalue;
}

button1.addEventListener("click", function () {
    showtext("input1","result1")
} );

button2.addEventListener("click", function () {
    showtext("input2","result2")
} );
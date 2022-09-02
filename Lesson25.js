/*function getAverage(a , b, c, d){
    const sum = a + b + c + d;
    const average = sum / 4;
    return average;
}
console.log("sum", sum);*/

const year = 2022
function getDate(day , month){
    const date = `Today is ${day} of ${month} - ${year}`
    return date
}
console.log(getDate(17 , 3));
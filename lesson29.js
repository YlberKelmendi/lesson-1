const fruits = ["apple", "pear", "peach", "kiwi"];

for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  //console.log("fruit:", fruit);//
}

//let i = 0;

//while (i < fruits.length) {
//const fruit = fruits [i];
//console.log("fruit:", fruit);
//i++;}

//do {
// const fruit = fruits[i];
//console.log("fruit:", fruit);
// i++;}
//while (i < fruits.length);

//const nums = ["one", "two", "three"];

//for (let i = 1; i <= nums.length; i++) {
//const num = nums[nums.length - i]
//console.log(num)}

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    if (number % 2 == 0){
        console.log("ky eshte nje numer qift",number)
    } else if(number % 2 ==1){
        console.log("ky eshte nje numer tek",number)
    }
    //console.log("number:", number);
}
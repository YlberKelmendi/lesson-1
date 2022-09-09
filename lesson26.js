/*const fruits = ["apple", "pear"];

fruits[0] = "lemon";
fruits[2] = "apple";
fruits.push("mango");
fruits.pop();
const nr = 3


const fruit = fruits.shift();

console.log("fruits", fruits);
console.log("nr of fruits", fruits,length);
fruits[fruits.length - 1];
console.log("fruit", fruit);

const name = "rinor";
console.log(array.isArray(fruits));

const continents = [
    ["Albania", "Kosova", ""],
    [],
    [],
    [],
    [],
    [],
    [],
]
console.log(continents[0][0]);*/

const colors = ["blue", "green"]
colors.push("yellow")
colors[1] = "red";
const removedcolor = colors.shift()
console.log(removedcolor)
colors.push("orange", "black");
const numbers = [
    ["1", "2", "3"],
    [],
    [],

]

console.log(colors, numbers[0][2]);

const car = {
    year : "2022",
    type : "A8",
    brand : "Audi",
}

console.log(car.year);

const car = {
    brand: "Mercedes",
    year: "2005",
    "te kaluara": 12000,
};
car.type = "190";
delete car.year
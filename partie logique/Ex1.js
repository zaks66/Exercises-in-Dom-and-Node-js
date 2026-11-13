// Pair ou Impair
const prompt = require("prompt-sync")();
let a = Number(prompt("enter a number : "))
if (a % 2 === 0) {
    console.log(`the number ${a} is : pair`)
}
else {
    console.log(`the number ${a} is : impair`)
}
export let students = [
    { id: 1, name: "Ali", age: 20, note: 15 },
    { id: 2, name: "Sara", age: 21, note: 17 },
    { id: 3, name: "Youssef", age: 19, note: 12 },
    { id: 4, name: "Amine", age: 22, note: 10 }
];
export function PairImpair(r) {

    if (r % 2 === 0) {
        console.log(`the number ${r} is : pair`)
    }
    else {
        console.log(`the number ${r} is : impair`)
    }
}
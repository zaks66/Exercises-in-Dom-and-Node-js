let products = [
    { id: 1, name: "Laptop", price: 5000 },
    { id: 2, name: "Mouse", price: 100 },
    { id: 3, name: "Keyboard", price: 250 }
];
let students = [
    { id: 1, name: "Ali", age: 20, note: 15 },
    { id: 2, name: "Sara", age: 21, note: 17 },
    { id: 3, name: "Youssef", age: 19, note: 12 },
    { id: 4, name: "Amine", age: 22, note: 10 }
];
const div = document.getElementById('clicked')
const data = JSON.parse(localStorage.getItem('value')) || [];
let i = data.length;
div.addEventListener('click', e => {
    e.preventDefault();
    if (i < students.length) {
        data.push(students[i])
        localStorage.setItem('value', JSON.stringify(data));
        i++;
    }
})

console.log(data)
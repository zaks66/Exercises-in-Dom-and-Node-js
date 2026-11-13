// JavaScript Counter with Increment and Decrement Buttons

const ys = document.getElementById("zu");
const positive = document.createElement('p');
let i = 0;
positive.textContent = i;
positive.style.cssText = "font-size: 20px";
document.body.style.cssText = "display : flex ; justify-content: center"
ys.style.cssText = "background-color: gray; border: 2px solid black; width : 100% ; display: flex;  justify-content : space-between ; padding : 15px; height: 50px; align-items: center;"
const creb1 = document.createElement("button");
const creb2 = document.createElement("button");
creb1.textContent = "button 1";
creb2.textContent = "button 2";
ys.appendChild(creb1)
ys.appendChild(creb2)
creb2.before(positive)
creb1.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation()
    positive.textContent = i + 1;
    i++;
    creb2.before(positive)
})
creb2.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation
    positive.textContent = i - 1;
    i--;
    creb2.before(positive)
})
// Password Toggle / Show & Hide Password
const zu = document.getElementById("zu")
const btn = document.getElementById("btn")
const input = document.getElementById("input")
btn.addEventListener('click', e => {
    e.preventDefault();
    if (input.type === "password") {
        input.type = "text"
        btn.textContent = "hidden";
    }
    else {
        input.type = "password";
        btn.textContent = "show"
    }

})
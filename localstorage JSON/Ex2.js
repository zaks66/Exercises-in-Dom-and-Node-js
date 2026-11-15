// innerhtml save or show data: 
const div = document.getElementById("clicked");
const ul = document.createElement('ul');
div.append(ul)
let data = JSON.parse(localStorage.getItem('value')) || [];
ul.innerHTML = data.map(Element => `<li>${Element}</li>`).join("")
let i = 0;
div.addEventListener('click', e => {
    e.preventDefault();
    const li = document.createElement('li')
    li.textContent = i;
    ul.append(li)
    data.push(i)
    localStorage.setItem('value', JSON.stringify(data));
    console.log(data)
    i++;
}
)
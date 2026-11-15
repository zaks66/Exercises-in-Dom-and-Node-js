// show data step loop on element per element : 
const div = document.getElementById("clicked");
const ul = document.createElement('ul');
div.append(ul)
let data = JSON.parse(localStorage.getItem('value')) || [];
data.forEach(element => {
    const li = document.createElement('li')
    li.textContent = element;
    ul.append(li)
});
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

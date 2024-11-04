// const name = document.getElementsByTagName(name);
// console.log(name);

// name.textContent = ['Alia'];

// const name = document.getElementById(id);
// name.textContent = (name);
// console.log(name);
// const btn = document.querySelector('.btn');
// btn.onclick = () стрелка {
//     alert('hello');
// };


// const btn = document.createElement('button');
// const item = document.querySelector('#item');
// btn.textContent = 'edit';
// item.appendChild(btn);

// myElement.classList.add('red');
// myElement.classList.remove('blue-background');
const button = document.getElementById('black');
const button1 = document.getElementById('yellow');
const button2 = document.getElementById('red');
const button3 = document.getElementById('blue');
button.onclick = () => {
    document.body.style.backgroundColor ='black';
};
button1.onclick = () => {
    document.body.style.backgroundColor ='yellow';
};
button2.onclick = () => {
    document.body.style.backgroundColor ='red';
};
button3.onclick = () => {
    document.body.style.backgroundColor ='blue';
};







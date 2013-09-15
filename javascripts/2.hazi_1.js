var button;
var counter = 0;

function setup() {
  button = document.getElementById('button');
  button.addEventListener('click', changeColor);
}

function changeColor() {
  if (counter%2==0)
    document.getElementById('div1').style.color='green';
  else
    document.getElementById('div1').style.color='red';
  counter++;
  if (counter>0) button.innerHTML = 'Click again';
}

document.addEventListener('DOMContentLoaded', setup);
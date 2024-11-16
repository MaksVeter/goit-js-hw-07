function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const elements = []; 

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(); 
    elements.push(box);
  }

  
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  
  if (amount >= 1 && amount <= 100) {
    destroyBoxes(); 
    createBoxes(amount); 
    input.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100'); 
  }
});

destroyButton.addEventListener('click', destroyBoxes);

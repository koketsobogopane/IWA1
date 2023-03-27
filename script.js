const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');

const subtractHandler = () => {
        const newValue = parseInt(number.value) - 1;
        number.value = newValue;

};

const addHandler = () => {
        const newValue = parseInt(number.value) + 1;
        number.value = newValue;

};




add.addEventListener('click', addHandler)
subtract.addEventListener('click', subtractHandler)
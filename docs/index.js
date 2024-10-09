import { isValidCard, maskCardNumber } from './validator.js';

document.getElementById('validateBtn').addEventListener('click', function() {
  const cardNumber = document.getElementById('cardNumber').value;

  if (isValidCard(cardNumber)) {
    document.getElementById('validationMessage').textContent = "Tarjeta Válida";
    document.getElementById('maskedCard').textContent = maskCardNumber(cardNumber);
  } else {
    document.getElementById('validationMessage').textContent = "Tarjeta Inválida";
  }
});

document.getElementById('cardNumber').addEventListener('input', function(e) {
  let input = e.target.value;
  
  input = input.replace(/\s/g, '');
  
  let formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';
  
  e.target.value = formattedInput;
});

const fechaInput = document.getElementById('fecha');

fechaInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.length >= 2) {
    value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
  }
  
  e.target.value = value;
  
  const inputLength = value.length;
  fechaInput.setSelectionRange(inputLength, inputLength);
});

document.getElementById('cardNumber').addEventListener('input', function(e) {
  let cardNumber = e.target.value.replace(/\s/g, '').toUpperCase();
  let formattedCardNumber = cardNumber.match(/.{1,4}/g)?.join(' ') || '';
  document.getElementById('cardNumberDisplay').textContent = formattedCardNumber;
});

document.getElementById('nombre').addEventListener('input', function(e) {
  let cardName = e.target.value.toUpperCase();
  document.getElementById('cardName').textContent = cardName;
});

document.getElementById('fecha').addEventListener('input', function(e) {
  let expiryDate = e.target.value.toUpperCase();
  document.getElementById('expiryDate').textContent = expiryDate;
});

const creditCard = document.querySelector('.credit-card');
const cvvInput = document.getElementById('cvv');
const cvvDisplay = document.getElementById('cvvDisplay');

cvvInput.addEventListener('focus', () => {
  creditCard.classList.add('flipped');
});

cvvInput.addEventListener('input', () => {
  cvvDisplay.textContent = cvvInput.value;
});

cvvInput.addEventListener('blur', () => {
  creditCard.classList.remove('flipped');
});

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

document.getElementById('cardNumber').addEventListener('input', function (e) {
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

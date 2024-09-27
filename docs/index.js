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
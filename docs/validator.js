export function isValidCard(cardNumber) {
  const reversedDigits = cardNumber.split('').reverse();
  let sum = 0;

  for (let i = 0; i < reversedDigits.length; i++) {
    let digit = parseInt(reversedDigits[i]);

    if (i % 2 !== 0) { 
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
}

export function maskCardNumber(cardNumber) {
  const lastFourDigits = cardNumber.slice(-4);
  const maskedDigits = cardNumber.slice(0, -4).replace(/\d/g, '*');

  return maskedDigits + lastFourDigits;
}

// Get DOM elements
const balanceInput = document.getElementById('balance');
const interestInput = document.getElementById('interest');
const periodInput = document.getElementById('period');
const calculateButton = document.getElementById('calculate');
const totalInterestOutput = document.getElementById('total-interest');
const totalAmountOutput = document.getElementById('total-amount');

// Calculate interest and total amount
calculateButton.addEventListener('click', () => {
  const balance = parseFloat(balanceInput.value);
  const interestRate = parseFloat(interestInput.value) / 100;
  const period = parseFloat(periodInput.value);

  if (isNaN(balance) || isNaN(interestRate) || isNaN(period)) {
    alert('Please enter valid numbers in all fields.');
    return;
  }

  // Calculate monthly interest rate
  const monthlyInterestRate = interestRate / 12;

  // Calculate total interest
  const totalInterest = balance * monthlyInterestRate * period;

  // Calculate total amount to pay
  const totalAmount = balance + totalInterest;

  // Display results
  totalInterestOutput.textContent = `$${totalInterest.toFixed(2)}`;
  totalAmountOutput.textContent = `$${totalAmount.toFixed(2)}`;
});
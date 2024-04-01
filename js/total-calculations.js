// Function to calculate total income, total expenses, and net income
function calculateTotal() {
  var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  var totalIncome = 0;
  var totalExpenses = 0;

  transactions.forEach(function(transaction) {
      if (transaction.type === 'income') {
          totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
          totalExpenses += transaction.amount;
      }
  });

  var netIncome = totalIncome - totalExpenses;

  // Update the summary section in calculation.html
  document.getElementById("total-income").textContent = totalIncome.toFixed(2);
  document.getElementById("total-expenses").textContent = totalExpenses.toFixed(2);
  document.getElementById("net-income").textContent = netIncome.toFixed(2);
  document.getElementById("balance").textContent = '₹' + netIncome.toFixed(2);
}

// Call the calculateTotal function when the page loads
window.onload = function() {
  calculateTotal();
};

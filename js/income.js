document.getElementById("income-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get form values
  var date = document.getElementById("income-date").value;
  var description = document.getElementById("income-description").value;
  var category = document.getElementById("income-category").value;
  var amount = parseFloat(document.getElementById("income-amount").value);
  
  // Basic input validation
  if (!date || !description || !category || isNaN(amount) || amount <= 0) {
      // Display appropriate error messages
      if (!date) {
          alert("Please enter a valid date.");
          return;
      }
      if (!description) {
          alert("Please enter a description.");
          return;
      }
      if (!category) {
          alert("Please select a category.");
          return;
      }
      if (isNaN(amount) || amount <= 0) {
          alert("Please enter a valid positive amount.");
          return;
      }
  }
  
  // Store the income transaction in local storage
  var incomeTransaction = {
    type: 'income',
    date: date,
    description: description,
    category: category,
    amount: amount
  };
  var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.push(incomeTransaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
  // Redirect to Transcation.html
  window.location.href = 'Transcation.html';
});

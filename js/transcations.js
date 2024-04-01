// Function to retrieve and populate income transactions
function populateIncomeTransactions() {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var incomeTableBody = document.getElementById("income-body");
    transactions.forEach(function(transaction) {
      if (transaction.type === 'income') {
        var newRow = incomeTableBody.insertRow();
        newRow.innerHTML = `<td>${transaction.date}</td><td>${transaction.description}</td><td>${transaction.category}</td><td>₹${transaction.amount.toFixed(2)}</td><td><button onclick="deleteTransaction(${transaction.id}, 'income')">Delete</button></td>`;
      }
    });
  }
  
  // Function to retrieve and populate expense transactions
  function populateExpenseTransactions() {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var expenseTableBody = document.getElementById("expense-body");
    transactions.forEach(function(transaction) {
      if (transaction.type === 'expense') {
        var newRow = expenseTableBody.insertRow();
        newRow.innerHTML = `<td>${transaction.date}</td><td>${transaction.description}</td><td>${transaction.category}</td><td>₹${transaction.amount.toFixed(2)}</td><td><button onclick="deleteTransaction(${transaction.id}, 'expense')">Delete</button></td>`;
      }
    });
  }
  
  // Function to delete a transaction
  function deleteTransaction(id, type) {
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // Find index of transaction with matching ID and type
    var index = transactions.findIndex(function(transaction) {
      return transaction.id === id && transaction.type === type;
    });
  
    // Remove transaction from array
    transactions.splice(index, 1);
  
    // Update local storage
    localStorage.setItem('transactions', JSON.stringify(transactions));
  
    // Reload the page
    location.reload();
  }

  
  // Function to filter income transactions by category
  function filterIncome() {
    var selectedCategory = document.getElementById("income-category-filter").value;
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var incomeTableBody = document.getElementById("income-body");
    incomeTableBody.innerHTML = ""; // Clear existing table rows

    transactions.forEach(function(transaction) {
      if (transaction.type === 'income' && (selectedCategory === 'all' || transaction.category === selectedCategory)) {
        var newRow = incomeTableBody.insertRow();
        newRow.innerHTML = `<td>${transaction.date}</td><td>${transaction.description}</td><td>${transaction.category}</td><td>₹${transaction.amount.toFixed(2)}</td><td><button onclick="deleteTransaction(${transaction.id}, 'income')">Delete</button></td>`;
      }
    });
  }

  // Function to filter expense transactions by category
  function filterExpenses() {
    var selectedCategory = document.getElementById("expense-category-filter").value;
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    var expenseTableBody = document.getElementById("expense-body");
    expenseTableBody.innerHTML = ""; // Clear existing table rows

    transactions.forEach(function(transaction) {
      if (transaction.type === 'expense' && (selectedCategory === 'all' || transaction.category === selectedCategory)) {
        var newRow = expenseTableBody.insertRow();
        newRow.innerHTML = `<td>${transaction.date}</td><td>${transaction.description}</td><td>${transaction.category}</td><td>₹${transaction.amount.toFixed(2)}</td><td><button onclick="deleteTransaction(${transaction.id}, 'expense')">Delete</button></td>`;
      }
    });
  }
  
  // Call functions to populate tables when the page loads
  window.onload = function() {
    populateIncomeTransactions();
    populateExpenseTransactions();
    filterIncome();
    filterExpenses();
    // Event listener for income category filter dropdown
   document.getElementById("income-category-filter").addEventListener("change", filterIncome);

   // Event listener for expense category filter dropdown
   document.getElementById("expense-category-filter").addEventListener("change", filterExpenses);
 
};
   
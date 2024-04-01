// Sample expense data (replace with your actual expense data)
let expensesData = {
  labels: ['Food', 'Transportation', 'Housing', 'Entertainment', 'Utilities', 'Others'],
  datasets: [{
    label: 'Expenses by Category',
    data: [], // Will be populated with actual expense amounts
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    hoverOffset: 4
  }]
};

// Function to calculate expenses by category
function calculateExpensesByCategory() {
const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
const expensesByCategory = {};

// Initialize expenses by category
expensesData.labels.forEach(label => {
  expensesByCategory[label] = 0;
});

// Calculate expenses by category
transactions.forEach(transaction => {
  if (transaction.type === 'expense') {
    expensesByCategory[transaction.category] += transaction.amount;
  }
});

// Update expensesData with calculated expenses
expensesData.datasets[0].data = expensesData.labels.map(label => expensesByCategory[label]);
}

// Function to create the pie chart
function createPieChart() {
calculateExpensesByCategory(); // Calculate expenses by category first
const ctx = document.getElementById('expensesChart').getContext('2d');
const myPieChart = new Chart(ctx, {
  type: 'pie',
  data: expensesData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Expenses by Category'
      }
    }
  }
});
}

// Call the function to create the pie chart when the page loads
window.onload = function() {
createPieChart();
};

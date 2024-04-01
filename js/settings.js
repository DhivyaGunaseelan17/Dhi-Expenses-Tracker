
 // Function to format transaction data as CSV
 function formatTransactions(transactions) {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Type,Date,Description,Category,Amount\n";

    transactions.forEach(transaction => {
      csvContent += `${transaction.type},${transaction.date},${transaction.description},${transaction.category},${transaction.amount}\n`;
    });

    return encodeURI(csvContent);
  }

  // Function to trigger download of transaction data
  function downloadTransactions(transactionsData) {
    const formattedData = formatTransactions(transactionsData);
    const link = document.createElement("a");
    link.setAttribute("href", formattedData);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
  

  // Trigger download
  link.click();
}

  // Event listener for export button
  document.getElementById("export-btn").addEventListener("click", function() {
    // Retrieve transactions from local storage
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    
    // Download transactions
    downloadTransactions(transactions);
  });
  
// Function to display download details in the table
function displayDownloadInfo(fileName, date, time) {
    const tableBody = document.querySelector("#download-info tbody");
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
      <td>${fileName}</td>
      <td>${date}</td>
      <td>${time}</td>
    `;
  }
  
  // Function to trigger download of transaction data
  function downloadTransactions(transactionsData) {
    const formattedData = formatTransactions(transactionsData);
    const link = document.createElement("a");
    link.setAttribute("href", formattedData);
    
    // Get current date and time
    const now = new Date();
    const date = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    // Set download attributes
    const fileName = "transactions.csv";
    link.setAttribute("download", fileName);
    
    // Display download details
    displayDownloadInfo(fileName, date, time);
    
    document.body.appendChild(link);
    link.click();
  }
  
//import
document.getElementById('import-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('import-file');
    var file = fileInput.files[0];

    if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
        var contents = e.target.result;
        // Process the contents of the file (parse CSV, etc.)
        console.log(contents);
        // Here you can perform actions with the imported data
        alert('File imported successfully! Contents: ' + contents);
      };

      reader.readAsText(file);
    } else {
      alert('Please select a file to import.');
    }
  });    


// logout.js

// Add event listener to logout link
document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag

    // Display thank you message
    alert('Thank you for using Dhi - Expense Tracker!, You may close this window now!');
});

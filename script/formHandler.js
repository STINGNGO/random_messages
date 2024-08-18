// formHandler.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('responseForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const selectedOption = document.querySelector('input[name="response"]:checked').value;
        
        if (selectedOption === 'yes') {
            // Open a new page with a joke
            window.location.href = '\pages\yes.html'; // You should create this file to show a joke
        } else if (selectedOption === 'no') {
            // Open a new page with a sad message
            window.location.href = '\pages\no.html'; // You should create this file to show a sad message
        }
    });
});

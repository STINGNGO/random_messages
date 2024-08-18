document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="response"]:checked');
        if (selectedOption) {
            const responseValue = selectedOption.value;

            if (responseValue === 'yes') {
                // Call the function from sarcasticMessageGenerator.js
                alert(generateSarcasticMessage());
            } else if (responseValue === 'no') {
                alert('Aww, sad.');
            }
        } else {
            alert('Please select an option.');
        }
    });
});

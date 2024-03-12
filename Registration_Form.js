document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const firstName = document.getElementById('first').value;
        const lastName = document.getElementById('last').value;
        const nidNumber = document.getElementById('NID').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const password = document.getElementById('password').value;
        const contact = document.getElementById('mobile').value;
        const gender = document.getElementById('gender').value;

        // Create an object with form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            nidNumber: nidNumber,
            email: email,
            dob: dob,
            password: password,
            contact: contact,
            gender: gender
        };

        // Convert the object to JSON
        const jsonData = JSON.stringify(formData);

        // Store the JSON data in local storage
        localStorage.setItem('formData', jsonData);

        // Optionally, you can clear the form fields after saving
        form.reset();

        // Display a success message or redirect to another page
        alert('Form data has been saved to local storage.');
    });
});

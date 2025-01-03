// Navbar toggle functionality for mobile
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// contact
// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Mock API for testing (Replace with your actual endpoint later)
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'; // Mock endpoint

    // Send the form data to the server
    fetch(endpoint, { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => {
        // Log the response status for debugging
        console.log('Response status:', response.status);

        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Clear the form fields after successful submission
        } else {
            return response.json().then(error => {
                // Log the error for debugging
                console.error('Error response:', error);
                alert(`Error: ${error.message || 'Unable to send message. Please try again.'}`);
            });
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
        alert('Error sending message. Please try again.');
    });
});
  

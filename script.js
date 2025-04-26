// Initialize EmailJS
// Replace these with your actual EmailJS credentials
const EMAILJS_PUBLIC_KEY = "OVvyzsaOOWUrxkH8F"; // Get this from EmailJS dashboard
const EMAILJS_SERVICE_ID = "service_ggfkxhn"; // Get this after adding an email service
const EMAILJS_TEMPLATE_ID = "template_5klxzg2"; // Get this after creating an email template

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }

    // Prepare email parameters
    const templateParams = {
        to_email: 'vbhandakar9@gmail.com',
        from_name: name,
        from_email: email,
        phone_number: number || 'Not provided',
        message: message
    };

    console.log('Attempting to send email with parameters:', templateParams);

    // Send email
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        })
        .catch(function(error) {
            console.error('Email sending failed. Full error:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            alert('Failed to send message. Please check the console for details or contact me directly at vbhandakar9@gmail.com');
        });
}); 
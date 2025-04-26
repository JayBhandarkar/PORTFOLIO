// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    const form = this;
    const submitButton = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('form-status');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    statusDiv.textContent = '';
    statusDiv.className = 'form-status';
    
    // Let Netlify handle the form submission
    // The form will be submitted to Netlify's servers
    // and you'll receive an email notification
}); 
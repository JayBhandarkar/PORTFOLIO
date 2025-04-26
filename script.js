// Form submission handling
document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const submitButton = form.querySelector('button[type="submit"]');
    const statusDiv = document.getElementById('form-status');
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    statusDiv.textContent = '';
    statusDiv.className = 'form-status';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.className = 'form-status success';
            form.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        statusDiv.textContent = 'Failed to send message. Please try again later.';
        statusDiv.className = 'form-status error';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
}); 
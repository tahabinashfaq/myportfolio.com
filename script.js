document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('form-status');

    // Simulate form submission
    formStatus.innerHTML = 'Sending message...';

    setTimeout(() => {
        formStatus.innerHTML = 'Message sent successfully!';
        formStatus.style.color = 'green';
        document.getElementById('contact-form').reset();
    }, 2000);
});

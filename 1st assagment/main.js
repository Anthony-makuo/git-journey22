
// Get the form by its ID (this is the most reliable way)
document.getElementById('myForm').addEventListener('submit', function(e) {
    // Stop form from submitting
    e.preventDefault();
    
    // Get values from the form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let msgBox = document.getElementById('formMessage');
    
    // Check if all fields are filled
    if (name && email && message) {
        // SUCCESS - show green message
        msgBox.style.display = 'block';
        msgBox.style.backgroundColor = '#d4edda';
        msgBox.style.color = '#155724';
        msgBox.style.border = '1px solid #c3e6cb';
        msgBox.innerHTML = '✅ Thank you ' + name + '! Your message has been sent. I will reply soon.';
        
        // Clear the form
        this.reset();
    } else {
        // ERROR - show red message
        msgBox.style.display = 'block';
        msgBox.style.backgroundColor = '#f8d7da';
        msgBox.style.color = '#721c24';
        msgBox.style.border = '1px solid #f5c6cb';
        msgBox.innerHTML = '⚠ Please fill in all fields';
    }
});


// document.getElementById('myForm').addEventListener('submit', function(e) {
//     // Don't prevent default - let FormSubmit do its job
//     // Just show a message
    
//     let name = document.getElementById('name').value;
//     let msgBox = document.getElementById('formMessage');
    
//     if (name) {
//         msgBox.style.display = 'block';
//         msgBox.className = 'success';
//         msgBox.innerHTML = '✅ Thank you ' + name + '! Your message is being sent...';
//     }
// });
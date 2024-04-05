document.getElementById('login-container').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const email = document.getElementById('email').value;
    const displayName = document.getElementById('display_name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;
    
    
    if (email === '') {
        alert('Please enter your email');
        return;
    }
    
    if (displayName === '') {
        alert('Please enter your display name');
        return;
    }
    
    if (username === '') {
        alert('Please enter your username');
        return;
    }
    
    if (password === '') {
        alert('Please enter your password');
        return;
    }
    
    if (month === '') {
        alert('Please select a month');
        return;
    }
    
    if (day === '') {
        alert('Please enter a day');
        return;
    }
    
    if (year === '') {
        alert('Please enter a year');
        return;
    }
    
    
    document.getElementById('login-container').submit();
});
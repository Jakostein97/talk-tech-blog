const handleLogIn = async function(event) {
    event.preventDefault();
    // create 3 variables for username, email and password elements
    const usernameEl = document.querySelector('#logIn-username').value.trim();
    const emailEl = document.querySelector('#logIn-email').value.trim();
    const passwordEl = document.querySelector('#logIn-password').value.trim();

    // create a fetch to /api/signup, create route in user route to sign up 
    if (usernameEl && emailEl && passwordEl) {
        console.log(usernameEl, emailEl, passwordEl);
       const logInFetch = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameEl,
                email: emailEl,
                password: passwordEl
            }),
            headers: {'Content-Type': 'application/json'}
        })
        console.log(logInFetch);
        if (logInFetch.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('could not log in')
        }
    } else {
        alert("fields can't be empty")
    }
}


document.querySelector('#logInForm').addEventListener('submit', handleLogIn);
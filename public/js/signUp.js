const handleSignUp = async function(event) {
    event.preventDefault();
    // create 3 variables for username, email and password elements
    const usernameEl = document.querySelector('#signUp-username').value.trim();
    const emailEl = document.querySelector('#signUp-email').value.trim();
    const passwordEl = document.querySelector('#signUp-password').value.trim();

    // create a fetch to /api/signup, create route in user route to sign up 
    if (usernameEl && emailEl && passwordEl) {
        console.log(usernameEl, emailEl, passwordEl);
       const signUpFetch = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameEl,
                email: emailEl,
                password: passwordEl
            }),
            headers: {'Content-Type': 'application/json'}
        })
        console.log(signUpFetch);
        if (signUpFetch.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('could not sign up')
        }
    } else {
        alert("fields can't be empty")
    }

    // use document.replace('/') to go back to homepage
}

// create button in sign up form and trigger handleSignUp with it
document.querySelector('#signUpForm').addEventListener('submit', handleSignUp);

const handleLogOut = async function () {
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'content-type': 'application/jason'}
    })
    if (res.ok) {
        document.location.replace('/')
    } 
    alert(res.statusText)
}

document.querySelector('#logout').addEventListener('click', handleLogOut);
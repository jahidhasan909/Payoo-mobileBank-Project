
document.getElementById('login-btn').addEventListener('click', function () {
    const numberInput = document.getElementById('number-input');
    const contactNumber = numberInput.value;

    const pinInput = document.getElementById('pin-input');
    const pin = pinInput.value;


    if (contactNumber == '01712345678' && pin == '1122') {
        alert('Login Success');
        window.location.replace('home.html');
        // window.location.assign('home.html');

    } else {
        alert('Login Flailed');
        return;
    }

})

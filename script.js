// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var no_hp = document.getElementById('no_hp').value;

    // Validasi format email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Email tidak valid');
        event.preventDefault();
    }

    // Validasi format nomor HP
    var phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(no_hp)) {
        alert('Nomor HP tidak valid');
        event.preventDefault();
    }
});
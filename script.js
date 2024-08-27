document.getElementById('registrationForm').addEventListener('input', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }

    // Validación de la contraseña
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    // Validación del nombre
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    }

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validación de la contraseña
    if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
});

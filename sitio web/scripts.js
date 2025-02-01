// Puedes agregar interactividad aquí, como validación del formulario de suscripción
document.getElementById('suscribirse').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
        alert(`Gracias por suscribirte con el email: ${email}`);
        event.target.email.value = ''; // Limpiar el campo de entrada
    } else {
        alert('Por favor, ingresa un email válido.');
    }
});
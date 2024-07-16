document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    alert('Formulario enviado con éxito!');
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
});

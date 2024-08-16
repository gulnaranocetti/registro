function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Manejador de eventos para el botón "Registrarme"
document.getElementById('regBtn').addEventListener('click', function() {
    // Ocultar las alertas previas antes de la validación
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");
    
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password1').value.trim();
    const repetirPassword = document.getElementById('password2').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const terminos = document.getElementById('terminos').checked;

    if (nombre === '' || email === '' || password === '' || repetirPassword === '' || apellido === '') {
        showAlertError(); // Campos vacíos
        return;
    
    }
    
    if (password.length < 6) {
        showAlertError();
        return;
        }

    if (password !== repetirPassword){
            showAlertError();
            return;
    }

    if(!terminos) {
       showAlertError();
        return;
    }
    showAlertSuccess() 
})

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    
    const termsCheckbox = document.getElementById("terminos");
    
    
    if (termsCheckbox.checked) {
        showAlertSuccess ();
    } else {
        showAlertError ();
    }
    
    
    });
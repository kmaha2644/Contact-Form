   function validateForm(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let telephone =
    document.getElementById("telephone").value;

    let message =
    document.getElementById("message").value;

    if(name == "" || email == "" || phone == "" || message == ""){

        document.getElementById("error").
        innerHTML = "Please fill all fields.";

        return false;
    }

    alert("Form Sbmitted Successfully!");

    return true;
}
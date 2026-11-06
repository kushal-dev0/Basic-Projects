const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const btn = document.getElementById("register_button");

btn.addEventListener("click", function () {

    if (username.value.length < 4) {
        alert("Username has to be more than 3 characters");
        return;
    }

    else if (password.value.length < 7) {
        alert("Password length has to be at least 7 characters");
        return;
    }

    else if (password.value !== confirm_password.value) {
        alert("Password has to be equal to confirm password");
        return;
    }

    else {
        alert("Success");

        username.value = "";
        email.value = "";
        password.value = "";
        confirm_password.value = "";
    }
});
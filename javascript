document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.querySelector("input[name='uname']");
    const password = document.querySelector("input[name='psw']");
    const loginButton = document.querySelector("button[type='submit']");
    const cancelButton = document.querySelector(".cancelbtn");

    form.addEventListener("submit", function (event) {
        if (username.value.trim() === "" || password.value.trim() === "") {
            alert("Please fill in both fields.");
            event.preventDefault();
        } else {
            alert("Login successful!"); // Simulated response, replace with actual validation logic
        }
    });

    cancelButton.addEventListener("click", function () {
        username.value = "";
        password.value = "";
    });
});

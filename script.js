
const showFormButton = document.getElementById("showFormButton");
const seatToSecureButton = document.getElementById("seatToSecureButton")
const buttonToSecure = document.getElementById("buttonToSecure")
const registrationContent = document.getElementById("registrationContent");
const closeButton = document.getElementById("closeButton");

showFormButton.addEventListener("click", function () {
    registrationContent.style.display = "block";
});

seatToSecureButton.addEventListener("click", function () {
    registrationContent.style.display = "block";
})
buttonToSecure.addEventListener("click", function () {
    registrationContent.style.display = "block";
});

closeButton.addEventListener("click", function () {
    registrationContent.style.display = "none";
});
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phonenumber = document.getElementById("phonenumber").value;

    const firstnameError = document.getElementById("firstnameError");
    const lastnameError = document.getElementById("lastnameError");
    const emailError = document.getElementById("emailError");
    const phonenumberError = document.getElementById("phonenumberError");

    firstnameError.textContent = "";
    lastnameError.textContent = "";
    emailError.textContent = "";
    phonenumberError.textContent = "";

    if (firstname.trim() === "") {
        firstnameError.textContent = "First Name is required";
        event.preventDefault();
    }

    if (lastname.trim() === "") {
        lastnameError.textContent = "Last Name is required";
        event.preventDefault();
    }

    if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email address";
        event.preventDefault();
    }

    if (!isValidPhoneNumber(phonenumber)) {
        phonenumberError.textContent = "Invalid phone number";
        event.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}
//  User Nmae
var user = document.getElementById("name");
var errorName = document.getElementById("error-name");
// Email
var email = document.getElementById("email");
var errorEmail = document.getElementById("error-email");
// Password
var password = document.getElementById("password");
var errorPassword = document.getElementById("error-password");
// confirmed  Password
var confirmedPassword = document.getElementById("confirmed-password");
var errorConfirmedPassword = document.getElementById(
  "error-confirmed-password"
);
// Age
var age = document.getElementById("age");
var errorAge = document.getElementById("error-age");
// Link
var link = document.getElementById("link");
var errorLink = document.getElementById("error-link");
// Phone
var phone = document.getElementById("phone");
var errorPhone = document.getElementById("error-phone");
// Message
var message = document.getElementById("message");
var errorMessage = document.getElementById("error-message");
// submit
var submit = document.getElementById("submit");

submit.addEventListener("click", element => {
  element.preventDefault();

  // check name
  if (user.value.length < 3 || user.value.length > 10) {
    errorName.innerHTML =
      "Your Name Must Be More Than 3-Ch and Less Than 10-Ch";
  } else {
    errorName.innerHTML = "";
  }

  // check Email
  // Presence of @ and . character
  // Presence of at least one character before and after the @.
  // Presence of at least two characters after . (dot).
  var testEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!testEmail.test(email.value)) {
    errorEmail.innerHTML = "Your Email is Not Valid";
  } else {
    errorEmail.innerHTML = "";
  }

  // check Link
  // The URL must start with either http or https and
  // then followed by :// and
  // then it must contain www. and
  // then followed by subdomain of length (2, 256) and
  // last part contains top level domain like .com, .org etc.
  var testLink =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (testLink.test(link.value)) {
    errorLink.innerHTML = "";
  } else {
    errorLink.innerHTML = "Your Link is Not Valid";
  }

  //Check Password
  if (password.value.length < 5) {
    errorPassword.innerHTML = "Your Password must be at less 6 letter";
  } else if (password.value.search(/[a-z]/) < 0) {
    errorPassword.innerHTML = "Your Password must containe lowercase letters";
  } else if (password.value.search(/[A-Z]/) < 0) {
    errorPassword.innerHTML = "Your Password must contain an uppercase letter";
  } else if (password.value.search(/[0-9]/) < 0) {
    errorPassword.innerHTML = "Your Password must contain numbers";
  } else if (password.value.search(/[!@#\$%\^&\*_]/) < 0) {
    errorPassword.innerHTML = "Your Password must contain a symbol";
  } else {
    errorPassword.innerHTML = "";
  }

  // confirmed Password
  if (confirmedPassword.value == "") {
    errorConfirmedPassword.style.color = "red";
    errorConfirmedPassword.innerHTML = "Empty Field";
  } else if (password.value == confirmedPassword.value) {
    errorConfirmedPassword.style.color = "blue";
    errorConfirmedPassword.innerHTML = "Password Match";
  } else {
    errorConfirmedPassword.style.color = "red";
    errorConfirmedPassword.innerHTML = "Password Not Match";
  }

  // check age
  if (age.value < 18) {
    errorAge.innerHTML = "Your Age is Lower than the Valid Age";
  } else {
    errorAge.innerHTML = "";
  }

  // chech Phone Number
  if (phone.value.length == 9 && phone.value.startsWith("777")) {
    errorPhone.innerHTML = "";
  } else {
    errorPhone.innerHTML = "Your Phone Number Not Valid";
  }

  // check Message
  if (message.value.length <= 20) {
    errorMessage.innerHTML = "Your Message Must Be More Than 20 Character";
  } else {
    errorMessage.innerHTML = "";
  }
});

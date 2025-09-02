//javaScript for toggle menu

var navlinks= document.getElementById ("navLinks"); 
function showMenu(){
    navlinks.style.right = "0";
}
function hideMenu(){
    navlinks.style.right = "-300px";
}

//login javascript
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmpassword");

  // create error message containers
  const errorContainers = {};
  [username, email, password, confirmPassword].forEach(input => {
    const error = document.createElement("small");
    error.style.color = "red";
    error.style.display = "block";
    errorContainers[input.id] = error;
    input.insertAdjacentElement("afterend", error);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form submission
    let valid = true;

    // clear old errors
    Object.values(errorContainers).forEach(err => err.textContent = "");

    // username validation
    if (username.value.length < 5) {
      errorContainers.username.textContent = "Username must be at least 5 characters long.";
      valid = false;
    }
    if (!/[A-Z]/.test(username.value)) {
      errorContainers.username.textContent += " Must contain at least one uppercase letter.";
      valid = false;
    }

    // email validation
    if (!/@/.test(email.value)) {
      errorContainers.email.textContent = "Email must contain @ symbol.";
      valid = false;
    }

    // password validation
    const passwordValue = password.value;
    const passErrors = [];
    if (passwordValue.length < 8) passErrors.push("At least 8 characters.");
    if (!/[a-z]/.test(passwordValue)) passErrors.push("At least one lowercase letter.");
    if (!/[A-Z]/.test(passwordValue)) passErrors.push("At least one uppercase letter.");
    if (!/[0-9]/.test(passwordValue)) passErrors.push("At least one number.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) passErrors.push("At least one special character.");

    if (passErrors.length > 0) {
      errorContainers.password.textContent = "Password must have: " + passErrors.join(" ");
      valid = false;
    }

    // confirm password
    if (confirmPassword.value !== password.value) {
      errorContainers.confirmpassword.textContent = "Passwords do not match.";
      valid = false;
    }

    // if valid, allow form submission (here you can send data to backend)
    if (valid) {
      alert("Signup successful!");
      form.submit(); // remove if you don’t want actual submission
    }
  });
});

//login javascript

 document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            let errorMessages = [];

            // Username rules
            if (username.length < 5) {
                errorMessages.push("Username must be at least 5 characters long.");
            }
            if (!/[A-Z]/.test(username)) {
                errorMessages.push("Username must contain at least one uppercase letter.");
            }

            // Password rules
            if (password.length < 8) {
                errorMessages.push("Password must be at least 8 characters long.");
            }
            if (!/[A-Z]/.test(password)) {
                errorMessages.push("Password must contain at least one uppercase letter.");
            }
            if (!/[a-z]/.test(password)) {
                errorMessages.push("Password must contain at least one lowercase letter.");
            }
            if (!/[0-9]/.test(password)) {
                errorMessages.push("Password must contain at least one number.");
            }
            if (!/[!@#$%^&*]/.test(password)) {
                errorMessages.push("Password must contain at least one special character (!,@,#,$,%,^,&,*)");
            }

            const errorBox = document.getElementById("errorMessages");
            if (errorMessages.length > 0) {
                errorBox.innerHTML = errorMessages.join("<br>");
            } else {
                errorBox.innerHTML = "";
                alert("Login successful!");
                this.submit(); // continue form submission
            }
        });

        //leasing javascript
        document.getElementById("leaseForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission until validation passes

    let description = document.getElementById("description").value.trim();
    let directions = document.getElementById("directions").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let amount = document.getElementById("amount").value.trim();

    let errorMsg = "";

    // Validate required fields
    if (description === "" || directions === "" || email === "" || amount === "" || phone === "") {
        errorMsg = "⚠️ All fields are required.";
    }

    // Phone number validation
    else if (phone.startsWith("07") || phone.startsWith("01")) {
        if (!/^\d{10}$/.test(phone)) {
            errorMsg = "⚠️ Phone must be 10 digits and start with 07 or 01.";
        }
    } 
    else if (phone.startsWith("+254")) {
        if (!/^\+254\d{9}$/.test(phone)) {
            errorMsg = "⚠️ Phone must be in format +254XXXXXXXXX (13 characters).";
        }
    } 
    else {
        errorMsg = "⚠️ Phone must start with 07, 01, or +254.";
    }

    // Email validation (simple check)
    if (errorMsg === "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsg = "⚠️ Enter a valid email address.";
    }

    // Amount validation (must be a number > 0)
    if (errorMsg === "" && (isNaN(amount) || Number(amount) <= 0)) {
        errorMsg = "⚠️ Enter a valid rent amount.";
    }

    // Show error or submit
    if (errorMsg !== "") {
        alert(errorMsg);
    } else {
        alert("✅ Lease details submitted successfully!");
        document.getElementById("leaseForm").reset();
    }
});


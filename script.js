document.addEventListener("DOMContentLoaded",function(){

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit",function(event) {

            const username=document.getElementById("logusername");
            const password=document.getElementById("logpassword");

            event.preventDefault();

            const userError = document.getElementById("loginUserError");
        const passError = document.getElementById("loginPassError");


        userError.textContent = "";
        passError.textContent = "";

        username.classList.remove("input-error");
        password.classList.remove("input-error");

        let valid = true;

        if (username.value === "") {
            userError.textContent = "Username is required";
            username.classList.add("input-error");
            valid = false;
        }

        if (password.value === "") {
            passError.textContent = "Password is required";
            password.classList.add("input-error");
            valid = false;
        } 
        else if (password.value.length < 8) {
            passError.textContent = "Password must be at least 8 characters";
            password.classList.add("input-error");
            valid = false;
        }

        if (valid) {
            let users = JSON.parse(localStorage.getItem("users")) || [];

    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].email === username.value &&
            users[i].password === password.value
        ) {
            found = true;
            break;
        }
    }

    if (found) {
        alert("Login successful!");
        localStorage.setItem("userToken", "true");
        window.location.href = "index.html";


        // loginForm.reset();
    } else {
        passError.textContent = "Invalid password";
        password.classList.add("input-error");
    }
}

    });
}



    //         if(username === "" || password === "") {
    //             alert("Please fill all fields");
    //         } else if(password.length < 8) {
    //             alert("Password must be at least 8 characters");
    //         } else {
    //             alert("Login successful!");
    //             loginForm.submit();
    //         }
    //     });
    // }


    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit",function(event) {

            const name = document.getElementById("signname");
            const email = document.getElementById("signemail");
            const password = document.getElementById("signpassword");
            const confirmPassword = document.getElementById("signpassagain");

            event.preventDefault();
            
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const passError = document.getElementById("passError");
            const confirmError = document.getElementById("confirmError");


            nameError.textContent = "";
            emailError.textContent = "";
            passError.textContent = "";
            confirmError.textContent = "";

            name.classList.remove("input-error");
            email.classList.remove("input-error");
            password.classList.remove("input-error");
            confirmPassword.classList.remove("input-error");

            let valid = true;


            if (name.value === "") {
                nameError.textContent = "Name is required";
                name.classList.add("input-error");
                valid = false;
            }

            if (email.value === "") {
                emailError.textContent = "Email is required";
                email.classList.add("input-error");
                valid = false;
            }

            if (password.value.length < 8) {
                passError.textContent = "Password must be at least 8 characters";
                password.classList.add("input-error");
                valid = false;
            }

            if (password.value !== confirmPassword.value) {
                confirmError.textContent = "Passwords do not match";
                confirmPassword.classList.add("input-error");
                valid = false;
            }

            if (valid) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exists = users.some(user => user.email === email.value);

    if (exists) {
        emailError.textContent = "Email already exists";
        email.classList.add("input-error");
        return;
    }

    const user = {
        name: name.value,
        email: email.value,
        password: password.value
    };


    users.push(user);


    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "login.html";

    // signupForm.reset();
}

        });
    }

});

//             event.preventDefault();

//             if (name === "" || email === "" || password === "" || confirmPassword === "") {
//             alert("All fields are required");
//         } 
//         else if (password.length < 8) {
//             alert("Password must be at least 8 characters");
//         } 
//         else if (password !== confirmPassword) {
//             alert("Passwords do not match");
//         } 
//         else {
//             alert("Signup successful!");
//             signupForm.submit();
//         }
//     });

// }

// });


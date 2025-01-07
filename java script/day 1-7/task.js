const registration = document.getElementById("registration");

        registration.addEventListener('input', function (event) {
            event.preventDefault();

            const Fname = document.getElementById("Fname").value;
            const Lname = document.getElementById("Lname").value;
            const Bdate = document.getElementById("Bdate").value;
            const email = document.getElementById("email").value;
            const confirm = document.getElementById("confirm").value;
            const password = document.getElementById("password").value;
            const Cpass = document.getElementById("Cpass").value;

            if (!/^[a-zA-Z]+$/.test(Fname)) {
                document.getElementById("Ferror").textContent = "Numbers are not allowed";
            } else {
                document.getElementById("Ferror").textContent = "";
            }

            if (!/^[a-zA-Z]+$/.test(Lname)) {
                document.getElementById("Lerror").textContent = "Numbers are not allowed";
            } else {
                document.getElementById("Lerror").textContent = "";
            }

            if(!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(Bdate)){
                document.getElementById("Berror").textContent ="The Format Should Be dd/mm/yyyy"
            } else{
                document.getElementById("Berror").textContent =""
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                document.getElementById("emailError").textContent = "Invalid email address";
            } else {
                document.getElementById("emailError").textContent = "";
            }

            if (email !== confirm) {
                document.getElementById("Cerror").textContent = "Emails do not match";
            } else {
                document.getElementById("Cerror").textContent = "";
            }

            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)) {
                document.getElementById("passError").textContent = "A password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
            } else {
                document.getElementById("passError").textContent = "";
            }
            

            if (password !== Cpass) {
                document.getElementById("CPerror").textContent = "Passwords do not match";
            } else {
                document.getElementById("CPerror").textContent = "";
            }





        })
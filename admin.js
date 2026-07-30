import { auth } from "./firebase.js";

import { 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");


loginBtn.addEventListener("click", () => {

    const email = emailInput.value;
    const password = passwordInput.value;


    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {

        const user = userCredential.user;

        message.innerHTML = "✅ Login Successful";

        console.log("Admin Logged In:", user.email);

    })

    .catch((error) => {

        message.innerHTML = "❌ " + error.message;

        console.log(error.message);

    });

});
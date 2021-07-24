let email = document.getElementById("email");
let form = document.getElementById("form");
let errors = document.getElementById("error");
let checkbox = document.getElementById("checkbox");
let pattern = /^[^ ]+@[^ ]+\/[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    let messages = []

    if(email.value === '' || email.value == null){
        messages.push("Email address is required")
    }

    if (messages.length > 0){
        e.preventDefault();
        errors.innerText = messages.join(", ");
    }

    
});


///^[^ ]+@[^ ]+\/[a-z]{2,3}$*/
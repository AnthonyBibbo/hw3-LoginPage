function verifyEmailPassword(email, password)
{
    if(!email.includes("@"))
        return false;
    if(password.length < 8)
        return false;
    return true;
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const responseText = document.getElementById("response");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    responseText.innerHTML = "";

    //ensure there are no empty fields for input when logging in
    if(!email || !password)
    {
        responseText.innerHTML = "Email or Password cannot be empty";
        return;
    }

    if(!verifyEmailPassword(email, password))
    {
        responseText.innerHTML = "Email must contain '@' and Password must be at least 8 characters long";
        return;
    }
    
    const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    console.log("Response status:", res.status);

    const text = await res.text();
    console.log("Response text:", text);
    responseText.innerHTML = text;
});
let messageForm = document.getElementById("message");
messageForm.addEventListener("submit", function(e){ //lägger till en eventlistner som bestämmer vad som ska göras när formet submittas
    e.preventDefault(); // tar bort default vilket i detta fallet är att sidan laddas om
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("messageText")
    let userMessage = "";
    if (emailInput.value === "") { //om emailinput är tomt ska förljande stäng läggas till på userMessage
        userMessage += "Enter a valid email.<br>"
    }
    if (messageInput.value === "") {
        userMessage += "Enter your message."
    }
    if (userMessage === "") { // om userMesage är tomt ska denna visas
        document.getElementById("messageSent").innerHTML = "Your message has been sent."
    }
    document.getElementById("userFeedback").innerHTML = userMessage;
})

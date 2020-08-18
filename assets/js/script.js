let senderName = document.getElementById("name");
let senderEmail = document.getElementById("email");
let senderSubject = document.getElementById("subject");
let senderMessage = document.getElementById("message");

function sendMail(){
    emailjs.send("gmail", "", {
        "email-name": senderName.value,
        "email-address": senderEmail.value,
        "email-subject": senderSubject.value,
        "email-message": senderMessage.value,
        "email-copy": senderEmail.value
    })

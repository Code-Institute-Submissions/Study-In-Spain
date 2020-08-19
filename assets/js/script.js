const sendButton = document.getElementById("send-message");
let senderName = document.getElementById("name");
let senderEmail = document.getElementById("email");
let senderSubject = document.getElementById("subject");
let senderMessage = document.getElementById("message");


function sendMail(){
    emailjs.send("gmail", "studyinspain", {
        "email-name": senderName.value,
        "email-address": senderEmail.value,
        "email-subject": senderSubject.value,
        "email-message": senderMessage.value,
        "email-copy": senderEmail.value
    })
    .then (function (response){
        $("#contact-notification").css("visibility", "visible").append(`
            <div class="alert alert-success" role="alert"> 
                Your email has been successfully sent, you´ll receive a copy.
            </div>
        `);
        $('form :input').val('');
        console.log("SUCCESS", response);
    },
    function (error){
        $('#contact-notification').css("visibility", "visible").append(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                There is the following error with your request: ${error}.
                Please, refresh this page or try again later
            </div>
        `)
        console.log("FAILED", error)
    });
    return false;
}


sendButton.addEventListener('click', function (){
    event.preventDefault();
    sendMail();
})


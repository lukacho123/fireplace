function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subjec").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_32twcmx","template_8aevcko",parms).then(alert("Email Sent!!"))

}
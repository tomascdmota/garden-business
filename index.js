emailjs.init('4OOyofQr6Ma2XWnDZ');

const sendEmail = () => {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (!name || !email || !message) {
        alert("Please fill in all the fields");
        return;
    }

    console.log(name, email, message); // Log the values for verification

    const service_id = "service_l8vrsfo";

    emailjs.send(service_id, 'template_04yrcop',{ name, email, message })
        .then(
            function (response) {
                console.log("Email sent successfully", response);
                alert("Message sent successfully");
            },
            function (error) {
                console.log("Failed to send email. Error:", error);
                alert("Failed to send message. Please try again later.");
            }
        );
};
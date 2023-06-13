export const sendMail = (techName, formstate, setformstate) => {
    console.log("message sent")
    console.log(formstate)
    const config = {
        SecureToken : "e0b94b0a-ae90-49d5-b200-d3828f181b04",
        To : "uptakeenquiry@gmail.com",
        From : "uptakeenquiry@gmail.com",
        Subject: "Enquiry",
        Body: `<h1> Tech name :  ${techName} </h1> <br>
              Username : ${formstate.name}<br>
              Contact number : ${formstate.phone_number} <br>
              Email address: ${formstate.email} <br>
              User Query : ${formstate.message}`
    }
    if (window.Email) {
        window.Email.send(config).then(() => {
            console.log("before submiting")
            setformstate("")
        })
    }
}
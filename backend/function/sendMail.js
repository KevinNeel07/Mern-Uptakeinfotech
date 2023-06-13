import nodeMailer from 'nodemailer';

export const sendMail = async (req, res) => {
    try {
        const data = req.body

        console.log(data);

        const options = {
            from: process.env.GMAIL,
            to: 'kevin@uptakeinfotech.com',
            subject: 'Enquiry',
            html: `
                    ${data.techname ? `<h1> ${data.techname}</h1>`: ''}
                    Username : ${data.name}<br>
                    Contact number : ${data.phone_number} <br>
                    Email address: ${data.email} <br>
                    User Query : ${data.message}
            `
        }
        console.log('send mail before transporter');

        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL,
                pass: process.env.PASSWORD
            }
        })
        console.log('send mail after transporter');

        transporter.sendMail(options, (err, info) => {
            console.log(options);
            if (err) return res.status(500).json({ message: 'Mail not sent' });

            res.status(200).json({ message: "Mail sent successfully!" });

        })

    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
        console.log(error);
    }
}

